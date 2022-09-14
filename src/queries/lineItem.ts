import gql from 'graphql-tag';

export const ALL_LINE_ITEMS_BY_USER = gql`
  query ALL_LINE_ITEMS($userId: ID!) {
    allLineItems(
      where: { sellOrder: { user: { id: $userId }, state: "CART" } }
    ) {
      id
      quantity
      price
      sellOrder {
        state
      }
      product {
        id
        name
        description
        hasTax
        photo {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export const ADD_LINE_ITEM_MUTATION = gql`
  mutation ADD_LINE_ITEM($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      id
      product {
        id
        name
      }
      quantity
    }
  }
`;

export const REMOVE_LINE_ITEM_MUTATION = gql`
  mutation REMOVE_LINE_ITEM($lineItemId: ID!) {
    deleteLineItem(id: $lineItemId) {
      id
      product {
        name
      }
    }
  }
`;
