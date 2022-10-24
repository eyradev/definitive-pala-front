import {
  ApolloCache,
  DefaultContext,
  MutationHookOptions,
  useMutation,
} from "@apollo/client";
import gql from "graphql-tag";
import useUser from "hooks/useUser";
import useUserPP from "hooks/useUserPP";
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
  const { user } = useUserPP();
  const updateCartAddressMutation = useMutation(
    UPDATE_CART_ADDRESS_MUTATION,
    options
  );
  return user?.id ? updateCartAddressMutation : [];
};
