import gql from "graphql-tag";

export const ADDRESS_BY_USER_QUERY = gql`
  query ADDRESS_BY_USER($userId: ID!) {
    allAddresses(where: { user: { id: $userId } }) {
      id
      addressL1
      description
      city {
        name
      }
    }
  }
`;

export const CREATE_USER_ADDRESS_MUTATION = gql`
  mutation CREATE_USER_ADDRESS(
    $addresL1: String!
    $cityId: ID!
    $description: String
  ) {
    createUserAddress(
      addressL1: $addresL1
      cityId: $cityId
      description: $description
    ) {
      id
    }
  }
`;

export const DELETE_ADDRESS_MUTATION = gql`
  mutation DELETE_ADDRESS($addressId: ID!) {
    deleteAddress(id: $addressId) {
      id
    }
  }
`;
