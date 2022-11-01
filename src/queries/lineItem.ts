import gql from "graphql-tag";

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
