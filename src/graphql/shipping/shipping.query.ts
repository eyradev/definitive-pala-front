import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import { useEffect, useState } from "react";
import { SHIPPING, SHIPPINGVariables } from "./__generated__/SHIPPING";

export const SHIPPING_QUERY = gql`
  query SHIPPING($cartId: ID, $addresses: ShippingAddresses) {
    Shipping(where: { cartId: $cartId, addresses: $addresses }) {
      distance
      shippingPrice
    }
  }
`;

export const useShippingQuery = (
  options?: QueryHookOptions<SHIPPING, SHIPPINGVariables>
) => {
  const { data: cartStoreData } = useCartStoreQuery();
  const { data: cartAddressData } = useCartAddressQuery();
  const cartPriceQuery = useCartPriceQuery();

  const storeAddress = cartStoreData?.cart?.store?.address;
  const customerAddress = cartAddressData?.cart?.address;

  const storePaysShipmentAfter = cartStoreData?.cart?.store?.paysShipmentAfter;
  const baseCartPrice = cartPriceQuery?.data?.CartPrice?.basePrice;

  const [storePaysShipment, setStorePaysShipment] = useState(false);

  const shippingQuery = useQuery<SHIPPING, SHIPPINGVariables>(SHIPPING_QUERY, {
    ...options,
    variables: {
      addresses: {
        fromAddressId: storeAddress?.id ?? "",
        toAddressId: customerAddress?.id ?? "",
      },
    },
    skip: !storeAddress?.id || !customerAddress?.id,
  });

  useEffect(() => {
    if (!baseCartPrice) return;
    if (typeof storePaysShipmentAfter === "number") {
      setStorePaysShipment(baseCartPrice >= storePaysShipmentAfter);
    } else {
      setStorePaysShipment(false);
    }
  }, [baseCartPrice, storePaysShipmentAfter]);

  if (storeAddress?.id && customerAddress?.id) {
    return {
      ...shippingQuery,
      data: { ...shippingQuery?.data, storePaysShipment },
    };
  }
};
