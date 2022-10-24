import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import { CART_STORE2, CART_STORE2Variables } from "./__generated__/CART_STORE2";

export const CART_STORE2_QUERY = gql`
  query CART_STORE2($cartId: ID!) {
    cart: SellOrder(where: { id: $cartId }) {
      id
      store {
        id
        name
        address {
          id
          addressL1
          city {
            name
            region {
              name
            }
          }
        }
      }
    }
  }
`;

export const useCartStoreQuery = (
  options?: QueryHookOptions<CART_STORE2, CART_STORE2Variables>
) => {
  const { data: cart } = useCurrentCartQuery();
  const cartStoreQuery = useQuery<CART_STORE2, CART_STORE2Variables>(
    CART_STORE2_QUERY,
    {
      ...options,
      variables: {
        cartId: cart?.id ?? "",
      },
      skip: !cart?.id,
    }
  );
  return cartStoreQuery;
};
