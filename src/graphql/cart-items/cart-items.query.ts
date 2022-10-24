import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import { CART_ITEMS, CART_ITEMSVariables } from "./__generated__/CART_ITEMS";

export const CART_ITEMS_QUERY = gql`
  query CART_ITEMS($cartId: ID!) {
    items: allLineItems(where: { sellOrder: { id: $cartId } }) {
      id
      price
      quantity
      product {
        id
        name
        photo(first: 1) {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const useCartItemsQuery = (
  options?: QueryHookOptions<CART_ITEMS, CART_ITEMSVariables>
) => {
  const { data: cart } = useCurrentCartQuery();

  const cartItems = useQuery<CART_ITEMS, CART_ITEMSVariables>(
    CART_ITEMS_QUERY,
    {
      ...options,
      variables: {
        cartId: cart?.id ?? "",
      },
      skip: !cart?.id,
    }
  );

  return cartItems;
};
