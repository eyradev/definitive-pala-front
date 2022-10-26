import {
  ApolloCache,
  DefaultContext,
  InternalRefetchQueriesInclude,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationTuple,
  useMutation,
} from "@apollo/client";
import gql from "graphql-tag";
import { CART_ADDRESS_QUERY } from "graphql/cart-address/cart-address.query";
import {
  CURRENT_CART_QUERY,
  useCurrentCartQuery,
} from "graphql/current-cart/current-cart.query";
import useUserPP from "hooks/useUserPP";
import {
  UPDATE_CART_ADDRESS,
  UPDATE_CART_ADDRESSVariables,
} from "./__generated__/UPDATE_CART_ADDRESS";

export const UPDATE_CART_ADDRESS_MUTATION = gql`
  mutation UPDATE_CART_ADDRESS($cartId: ID, $addressId: ID) {
    updateCartAddress(cartId: $cartId, addressId: $addressId) {
      addressUpdated
      cartCreated
      address {
        id
      }
    }
  }
`;

export const useUpdateCartAddressMutation = (
  options?: MutationHookOptions<
    UPDATE_CART_ADDRESS,
    UPDATE_CART_ADDRESSVariables
  >
):
  | MutationTuple<
      UPDATE_CART_ADDRESS,
      UPDATE_CART_ADDRESSVariables,
      DefaultContext,
      ApolloCache<any>
    >
  | undefined => {
  const { user } = useUserPP();
  const { data: cart } = useCurrentCartQuery();

  const updateCartAddressMutation = useMutation<
    UPDATE_CART_ADDRESS,
    UPDATE_CART_ADDRESSVariables
  >(UPDATE_CART_ADDRESS_MUTATION, {
    ...options,
    refetchQueries: ({ data }) => {
      const queries: InternalRefetchQueriesInclude = [];
      if (!data?.updateCartAddress) return [];
      const { cartCreated, addressUpdated } = data.updateCartAddress;

      if (user?.id && cartCreated) {
        queries.push({
          query: CURRENT_CART_QUERY,
          variables: { userId: user?.id },
        });
      }

      if (cart?.id && addressUpdated) {
        queries.push({
          query: CART_ADDRESS_QUERY,
          variables: { cartId: cart?.id },
        });
      }

      return queries;
    },

    variables: {
      ...options?.variables,
      cartId: cart?.id,
    },
  });

  return user?.id ? updateCartAddressMutation : undefined;
};
