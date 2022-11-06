import { MutationHookOptions, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { USER_ADDRESSES_QUERY } from "graphql/user-addresses/user-addresses.query";
import useNotification from "hooks/useNotification";
import useUserPP from "hooks/useUserPP";
import {
  CREATE_USER_ADDRESS,
  CREATE_USER_ADDRESSVariables,
} from "./__generated__/CREATE_USER_ADDRESS";

export const CREATE_USER_ADDRESS_MUTATION = gql`
  mutation CREATE_USER_ADDRESS(
    $userId: ID
    $cityId: ID!
    $addressL1: String!
    $description: String!
  ) {
    createUserAddress(
      data: {
        addressL1: $addressL1
        description: $description
        cityId: $cityId
        userId: $userId
      }
    ) {
      addressId
    }
  }
`;

export const useCreateUserAddressMutation = (
  options?: MutationHookOptions<
    CREATE_USER_ADDRESS,
    CREATE_USER_ADDRESSVariables
  >
) => {
  const { user } = useUserPP();
  const { addNotification } = useNotification();

  // TODO: refetch user addresses
  const createUserAddressMutation = useMutation<
    CREATE_USER_ADDRESS,
    CREATE_USER_ADDRESSVariables
  >(CREATE_USER_ADDRESS_MUTATION, {
    ...options,
    onCompleted: (data) => {
      if (options?.onCompleted) options.onCompleted(data);
      if (!addNotification) return;
      addNotification({ type: "success", message: "dirección creada" });
    },
    refetchQueries: (fetchResult) => {
      const refetchQueries =
        options?.refetchQueries && Array.isArray(options?.refetchQueries)
          ? options.refetchQueries
          : [];
      if (user?.id && fetchResult.data?.createUserAddress?.addressId) {
        refetchQueries.push({
          query: USER_ADDRESSES_QUERY,
          variables: {
            userId: user.id,
          },
        });
      }
      return refetchQueries;
    },
  });

  if (user?.id) return createUserAddressMutation;
};
