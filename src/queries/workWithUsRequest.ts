import gql from 'graphql-tag';

export const WORK_WITH_US_MUTATION = gql`
  mutation WORK_WITH_US(
    $name: String
    $email: String
    $phone: String
    $verified: String
  ) {
    createWorkWithUsRequest(
      data: { name: $name, email: $email, phone: $phone, verified: $verified }
    ) {
      name
      email
      phone
      verified
    }
  }
`;
