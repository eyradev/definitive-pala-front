import {
  InternalRefetchQueryDescriptor,
  MutationHookOptions,
  useMutation,
} from "@apollo/client";
import gql from "graphql-tag";
import { CART_ITEMS_QUERY } from "graphql/cart-items/cart-items.query";
import { CART_PRICE_QUERY } from "graphql/cart-price/cart-price.query";
import { CART_STORE2_QUERY } from "graphql/cart-store/cart-store.query";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import {
  REMOVE_CART_ITEM,
  REMOVE_CART_ITEMVariables,
} from "./__generated__/REMOVE_CART_ITEM";

const REMOVE_CART_ITEM_MUTATION = gql`
  mutation REMOVE_CART_ITEM($lineItemId: ID!, $quantity: Int) {
    removeFromCart(lineItemId: $lineItemId, quantity: $quantity) {
      lineItem {
        id
      }
      storeUpdated
      lineItemDeleted
    }
  }
`;

export const useRemoveCartItemMutation = (
  options?: MutationHookOptions<REMOVE_CART_ITEM, REMOVE_CART_ITEMVariables>
) => {
  const { data: cart } = useCurrentCartQuery();

  const cartItemsQuery: InternalRefetchQueryDescriptor = {
    query: CART_ITEMS_QUERY,
    variables: {
      cartId: cart?.id,
    },
  };

  const cartPriceQuery: InternalRefetchQueryDescriptor = {
    query: CART_PRICE_QUERY,
    variables: {
      cartId: cart?.id,
    },
  };

  const removeCartItemMutation = useMutation<
    REMOVE_CART_ITEM,
    REMOVE_CART_ITEMVariables
  >(REMOVE_CART_ITEM_MUTATION, {
    ...options,
    refetchQueries: ({ data }) => {
      const queries = [cartItemsQuery, cartPriceQuery];
      if (data?.removeFromCart?.storeUpdated) {
        queries.push({
          query: CART_STORE2_QUERY,
          variables: { cartId: cart?.id },
        });
      }
      return queries;
    },
  });

  return cart?.id ? removeCartItemMutation : undefined;
};
