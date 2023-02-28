import {
  InternalRefetchQueryDescriptor,
  MutationHookOptions,
  useMutation,
} from "@apollo/client";
import gql from "graphql-tag";
import { CART_ITEMS_QUERY } from "graphql/cart-items/cart-items.query";
import { CART_PRICE_QUERY } from "graphql/cart-price/cart-price.query";
import { CART_STORE2_QUERY } from "graphql/cart-store/cart-store.query";
import {
  CURRENT_CART_QUERY,
  useCurrentCartQuery,
} from "graphql/current-cart/current-cart.query";
import useNotification from "hooks/useNotification";
import useUserPP from "hooks/useUserPP";
import {
  ADD_CART_ITEM,
  ADD_CART_ITEMVariables,
} from "./__generated__/ADD_CART_ITEM";

export const ADD_CART_ITEM_MUTATION = gql`
  mutation ADD_CART_ITEM($productId: ID!, $quantity: Int!) {
    addToCart2(productId: $productId, quantity: $quantity) {
      lineItemCreated
      cartCreated
      storeUpdated
    }
  }
`;

export const useAddCartItemMutation = (
  options?: MutationHookOptions<ADD_CART_ITEM, ADD_CART_ITEMVariables>
) => {
  const { user } = useUserPP();
  const { data: cart } = useCurrentCartQuery();
  const { addNotification } = useNotification();

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

  const addCartItemMutation = useMutation<
    ADD_CART_ITEM,
    ADD_CART_ITEMVariables
  >(ADD_CART_ITEM_MUTATION, {
    ...options,
    refetchQueries: ({ data }) => {
      const refetchQueries = [cartItemsQuery, cartPriceQuery];
      if (data?.addToCart2?.cartCreated) {
        refetchQueries.push({
          query: CURRENT_CART_QUERY,
          variables: { userId: user?.id },
        });
      }
      if (data?.addToCart2?.storeUpdated) {
        refetchQueries.push({
          query: CART_STORE2_QUERY,
          variables: { cartId: cart?.id },
        });
      }
      return refetchQueries;
    },
    onCompleted: () => {
      if (!addNotification) return;
      addNotification({
        type: "success",
        message: "Producto agregado al carrito",
      });
    },
  });

  return user?.id ? addCartItemMutation : undefined;
};
