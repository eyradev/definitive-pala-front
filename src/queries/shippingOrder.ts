import gql from 'graphql-tag';

export const ADD_SHIPPING_ORDER = gql`
  mutation ADD_SHIPPING_ORDER_MUTATION($addressId: ID!) {
    addShippingOrder(addressId: $addressId) {
      id
    }
  }
`;
