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
