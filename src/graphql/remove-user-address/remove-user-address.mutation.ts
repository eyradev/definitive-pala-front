import { MutationHookOptions, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import useNotification from "hooks/useNotification";
import useUserPP from "hooks/useUserPP";
import {
  REMOVE_USER_ADDRESS,
  REMOVE_USER_ADDRESSVariables,
} from "./__generated__/REMOVE_USER_ADDRESS";

export const REMOVE_USER_ADDRESS_MUTATION = gql`
  mutation REMOVE_USER_ADDRESS($addressId: ID!) {
    deleteAddress(id: $addressId) {
      id
    }
  }
`;

export const useRemoveUserAddressMutation = (
  options?: MutationHookOptions<
    REMOVE_USER_ADDRESS,
    REMOVE_USER_ADDRESSVariables
  >
) => {
  const { user } = useUserPP();
  const { addNotification } = useNotification();

  // TODO: refetch user addresses
  const removeUserAddressMutation = useMutation<
    REMOVE_USER_ADDRESS,
    REMOVE_USER_ADDRESSVariables
  >(REMOVE_USER_ADDRESS_MUTATION, {
    ...options,
    onCompleted: (data) => {
      if (options?.onCompleted) options.onCompleted(data);
      if (!addNotification) return;
      if (data?.deleteAddress?.id) {
        addNotification({ type: "info", message: "dirección eliminada" });
      }
    },
  });

  if (user?.id) return removeUserAddressMutation;
};
