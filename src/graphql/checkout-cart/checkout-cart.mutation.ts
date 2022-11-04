import { MutationHookOptions, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CHECKOUT_CART } from "./__generated__/CHECKOUT_CART";

export const CHECKOUT_CART_MUTATION = gql`
  mutation CHECKOUT_CART {
    checkoutCart {
      epaycoData
    }
  }
`;

export const useCheckoutCartMutation = (
  options?: MutationHookOptions<CHECKOUT_CART>
) => {
  // TODO: refetch cart
  return useMutation<CHECKOUT_CART>(CHECKOUT_CART_MUTATION, options);
};
