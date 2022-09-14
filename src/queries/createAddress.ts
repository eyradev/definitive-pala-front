import gql from 'graphql-tag';

export const CREATE_ADDRESS_MUTATION = gql`
  mutation CREATE_ADDRESS($address: String, $description: String) {
    createAddress(data: { addressL1: $address, description: $description }) {
      id
      addressL1
      description
    }
  }
`;
