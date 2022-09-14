import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER {
    authenticatedItem {
      ... on User {
        id
        name
        lastName
        email
        phone
        identificationType
        identification
        address {
          id
          addressL1
          description
          id
        }
        category {
          name
          id
          type
        }
      }
    }
  }
`;
