import gql from "graphql-tag";

export const ADD_CONTACT_REQUEST_MUTATION = gql`
  mutation ADD_CONTACT_REQUEST($data: ContactRequestCreateInput) {
    createContactRequest(data: $data) {
      id
    }
  }
`;