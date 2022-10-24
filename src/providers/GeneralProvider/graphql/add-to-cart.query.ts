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
  ADD_CART_ITEM,
  ADD_CART_ITEMVariables,
} from "./__generated__/ADD_CART_ITEM";

export const ADD_TO_CART_MUTATION = gql`
  mutation ADD_CART_ITEM($productId: ID!, $quantity: Int!) {
    addToCart2(productId: $productId, quantity: $quantity) {
      lineItem {
        id
        quantity
        price
      }
    }
  }
`;

export const useAddCartItemMutation = (
  options?: MutationHookOptions<
    ADD_CART_ITEM,
    ADD_CART_ITEMVariables,
    DefaultContext,
    ApolloCache<any>
  >
) => {
  const { data: cart } = useCurrentCartQuery();
  const mutationData = useMutation<ADD_CART_ITEM, ADD_CART_ITEMVariables>(
    ADD_TO_CART_MUTATION,
    {
      ...options,
      refetchQueries: [
        {
          query: CART_ITEMS_QUERY,
          variables: {
            cartId: cart?.id ?? "",
          },
        },
      ],
    }
  );

  return cart?.id ? mutationData : [];
};
