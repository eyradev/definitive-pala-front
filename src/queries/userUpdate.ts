import gql from 'graphql-tag';

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER(
    $Addressconnect: [AddressWhereUniqueInput]!
    $Categoryconnect: [CategoryWhereUniqueInput]!
    $Categorydisconnect: [CategoryWhereUniqueInput]!
    $id: ID!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $email: String!
    $docType: String!
    $docNumber: String!
  ) {
    updateUser(
      id: $id
      data: {
        name: $firstName
        lastName: $lastName
        phone: $phone
        email: $email
        address: { disconnectAll: true, connect: $Addressconnect }
        category: { connect: $Categoryconnect, disconnect: $Categorydisconnect }
        identificationType: $docType
        identification: $docNumber
      }
    ) {
      id
      name
      phone
      email
      identificationType
      identification
      address {
        addressL1
        id
      }
      category {
        name
      }
    }
  }
`;

export const UPDATA_USER_MUTATION_2 = gql`
  mutation UPDATE_USER_MUTATION($userId: ID!, $data: UserUpdateInput!) {
    updateUser(id: $userId, data: $data) {
      id
    }
  }
`;
