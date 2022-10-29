import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import { useState } from "react";
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

  const storeAddress = cartStoreData?.cart?.store?.address;
  const customerAddress = cartAddressData?.cart?.address;

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
    onCompleted: ({ Shipping: shippingData }) => {
      if (!shippingData?.shippingPrice) return;
      if (typeof cartStoreData?.cart?.store?.paysShipmentAfter === "number") {
        setStorePaysShipment(
          shippingData?.shippingPrice >=
            cartStoreData.cart.store.paysShipmentAfter
        );
      } else {
        setStorePaysShipment(false);
      }
    },
  });

  if (storeAddress?.id && customerAddress?.id) {
    return {
      ...shippingQuery,
      data: { ...shippingQuery?.data, storePaysShipment },
    };
  }
};
