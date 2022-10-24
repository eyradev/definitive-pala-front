import {
  ApolloCache,
  DefaultContext,
  MutationHookOptions,
  useMutation,
} from "@apollo/client";
import gql from "graphql-tag";
import { CART_ADDRESS_QUERY } from "graphql/cart-address/cart-address.query";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import {
  UPDATE_CART_ADDRESS,
  UPDATE_CART_ADDRESSVariables,
} from "./__generated__/UPDATE_CART_ADDRESS";

const UPDATE_CART_ADDRESS_MUTATION = gql`
  mutation UPDATE_CART_ADDRESS($addressId: ID!) {
    updateCartAddress(addressId: $addressId) {
      sellOrderId
    }
  }
`;

export const useUpdateCartAddressMutation = (
  options?: MutationHookOptions<
    UPDATE_CART_ADDRESS,
    UPDATE_CART_ADDRESSVariables,
    DefaultContext,
    ApolloCache<any>
  >
) => {
  const { data: cart } = useCurrentCartQuery();
  const updateCartAddressMutation = useMutation(UPDATE_CART_ADDRESS_MUTATION, {
    ...options,
    refetchQueries: [
      {
        query: CART_ADDRESS_QUERY,
        variables: { cartId: cart?.id ?? "" },
      },
    ],
  });
  return cart?.id ? updateCartAddressMutation : [];
};
