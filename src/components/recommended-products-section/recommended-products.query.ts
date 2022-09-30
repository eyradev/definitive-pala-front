import gql from "graphql-tag";

export const RECOMMENDED_PRODUCTS_QUERY = gql`
  query RECOMMENDED_PRODUCTS($userId: ID!) {
    allProducts(
      where: {
        category_some: { user_some: { id: $userId } }
        status: "AVAILABLE"
      }
      first: 10
    ) {
      id
      name
      description
      price
      salePrice
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
      category {
        id
        type
        name
        color
        icon {
          publicUrlTransformed
        }
      }
      store {
        id
        name
      }
    }
  }
`;
