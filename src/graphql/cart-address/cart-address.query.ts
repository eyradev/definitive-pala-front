import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import {
  CART_ADDRESS,
  CART_ADDRESSVariables,
} from "./__generated__/CART_ADDRESS";

export const CART_ADDRESS_QUERY = gql`
  query CART_ADDRESS($cartId: ID!) {
    cart: SellOrder(where: { id: $cartId }) {
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
`;

export const useCartAddressQuery = (
  options?: QueryHookOptions<CART_ADDRESS, CART_ADDRESSVariables>
) => {
  const { data: cart } = useCurrentCartQuery();

  const cartAddress = useQuery<CART_ADDRESS, CART_ADDRESSVariables>(
    CART_ADDRESS_QUERY,
    { ...options, variables: { cartId: cart?.id ?? "" }, skip: !cart?.id }
  );

  return cartAddress;
};
