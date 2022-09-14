import gql from 'graphql-tag';

export const RESET_MUTATION = gql`
  mutation RESET($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;
