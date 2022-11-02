import { MutationHookOptions, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CART_ITEMS_QUERY } from "graphql/cart-items/cart-items.query";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import useNotification from "hooks/useNotification";
import { ADJUST_CART } from "./__generated__/ADJUST_CART";

export const ADJUST_CART_MUTATION = gql`
  mutation ADJUST_CART {
    adjustments: adjustCart {
      deletedLineItems {
        id
      }
      updatedLineItems {
        id
      }
    }
  }
`;

export const useAdjustCartMutation = (
  options?: MutationHookOptions<ADJUST_CART>
) => {
  const { addNotification } = useNotification();

  const { data: cart } = useCurrentCartQuery();

  const adjustCartMutation = useMutation<ADJUST_CART>(ADJUST_CART_MUTATION, {
    ...options,
    // only refetch if there's updates
    refetchQueries: ({ data }) => {
      if (!data?.adjustments || !cart?.id) return [];

      const { deletedLineItems, updatedLineItems } = data.adjustments;

      if (deletedLineItems?.length || updatedLineItems?.length) {
        return [
          {
            query: CART_ITEMS_QUERY,
            variables: {
              cartId: cart?.id ?? "",
            },
          },
        ];
      }
      return [];
    },
    onCompleted: (data) => {
      if (!data?.adjustments || !addNotification) return;

      const { deletedLineItems, updatedLineItems } = data.adjustments;

      const messageParts: string[] = [];
      if (deletedLineItems?.length) {
        messageParts.push("Se eliminaron items de tu carrito");
      }

      if (updatedLineItems?.length) {
        messageParts.push("Se modificaron items de tu carrito");
      }

      if (messageParts?.length) {
        addNotification({ type: "info", message: messageParts.join("\n") });
      }
    },
  });

  return cart?.id ? adjustCartMutation : undefined;
};