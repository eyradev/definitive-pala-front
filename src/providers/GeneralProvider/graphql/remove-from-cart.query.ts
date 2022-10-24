import {
  ApolloCache,
  DefaultContext,
  MutationHookOptions,
  useMutation,
} from "@apollo/client";
import gql from "graphql-tag";
import { CART_ITEMS_QUERY } from "graphql/cart-items/cart-items.query";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import {
  REMOVE_FROM_CART,
  REMOVE_FROM_CARTVariables,
} from "./__generated__/REMOVE_FROM_CART";

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART($lineItemId: ID!, $quantity: Int) {
    removeFromCart(lineItemId: $lineItemId, quantity: $quantity) {
      lineItem {
        id
        quantity
        price
      }
    }
  }
`;

export const useRemoveFromCartMutation = (
  options?: MutationHookOptions<
    REMOVE_FROM_CART,
    REMOVE_FROM_CARTVariables,
    DefaultContext,
    ApolloCache<any>
  >
) => {
  const { data: cart } = useCurrentCartQuery();

  const removeFromCartMutation = useMutation<
    REMOVE_FROM_CART,
    REMOVE_FROM_CARTVariables
  >(REMOVE_FROM_CART_MUTATION, {
    ...options,
    refetchQueries: [
      {
        query: CART_ITEMS_QUERY,
        variables: {
          cartId: cart?.id ?? "",
        },
      },
    ],
  });

  return cart?.id ? removeFromCartMutation : [];
};
