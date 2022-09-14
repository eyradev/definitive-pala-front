import gql from 'graphql-tag';

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;
