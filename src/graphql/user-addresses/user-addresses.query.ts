import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useUserPP from "hooks/useUserPP";
import {
  USER_ADDRESSES,
  USER_ADDRESSESVariables,
} from "./__generated__/USER_ADDRESSES";

export const USER_ADDRESSES_QUERY = gql`
  query USER_ADDRESSES($userId: ID!) {
    allAddresses(where: { user: { id: $userId } }) {
      id
      addressL1
      description
      city {
        id
        name
        region {
          id
          name
        }
      }
    }
  }
`;

export const useUserAddressesQuery = (
  options?: QueryHookOptions<USER_ADDRESSES, USER_ADDRESSESVariables>
) => {
  const { user } = useUserPP();
  const userAddressesQuery = useQuery<USER_ADDRESSES, USER_ADDRESSESVariables>(
    USER_ADDRESSES_QUERY,
    {
      ...options,
      skip: !user?.id,
      variables: {
        userId: user?.id ?? "",
      },
    }
  );

  if (user?.id) return userAddressesQuery;
};
