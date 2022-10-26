import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import {
  SHIPPING_PRICE,
  SHIPPING_PRICEVariables,
} from "./__generated__/SHIPPING_PRICE";

export const SHIPPING_PRICE_QUERY = gql`
  query SHIPPING_PRICE($storeAddressId: ID!, $customerAddressId: ID!) {
    shippingPrice(
      input: {
        storeAddressId: $storeAddressId
        customerAddressId: $customerAddressId
      }
    ) {
      nightSurcharge
      totalService
    }
  }
`;

export const useShippingPriceQuery = (
  options?: QueryHookOptions<SHIPPING_PRICE, SHIPPING_PRICEVariables>
) => {
  const { data: cartStoreData } = useCartStoreQuery();
  const { data: cartAddressData } = useCartAddressQuery();

  const storeAddress = cartStoreData?.cart?.store?.address;
  const customerAddress = cartAddressData?.cart?.address;

  const shippingPriceQuery = useQuery<SHIPPING_PRICE, SHIPPING_PRICEVariables>(
    SHIPPING_PRICE_QUERY,
    {
      ...options,
      variables: {
        storeAddressId: storeAddress?.id ?? "",
        customerAddressId: customerAddress?.id ?? "",
      },

      skip: !storeAddress?.id || !customerAddress?.id,
    }
  );

  if (storeAddress?.id && customerAddress?.id) {
    return shippingPriceQuery;
  }
};
