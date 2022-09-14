import gql from 'graphql-tag';

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $identificationType: String!
    $identification: String!
  ) {
    createUser(
      data: {
        email: $email
        name: $firstName
        lastName: $lastName
        password: $password
        phone: $phone
        identificationType: $identificationType
        identification: $identification
      }
    ) {
      id
      email
      name
    }
  }
`;
