import gql from 'graphql-tag';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS {
    allProducts(where: { status: "AVAILABLE" }) {
      id
      name
      price
      salePrice
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query PRODUCT_BY_ID($productId: ID!) {
    allProducts(where: { id: $productId, status: "AVAILABLE" }) {
      id
      name
      sku
      description
      productionTime
      video
      store {
        id
        name
        banner {
          publicUrlTransformed
        }
        video
      }
      photo {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      review {
        id
        user {
          id
          name
        }
        points
        comments
        visible
      }
      category {
        id
        color
        name
        type
        icon {
          publicUrlTransformed
        }
      }
      price
      salePrice
      calories100gr
      sodio
    }
  }
`;

export const GET_MAX_PRICE = gql`
  query PRODUCT_MAX_PRICE {
    allProducts(sortBy: price_DESC, first: 1) {
      price
    }
  }
`;

export const GET_MIN_PRICE = gql`
  query PRODUCT_MIN_PRICE {
    allProducts(sortBy: price_ASC, first: 1) {
      price
    }
  }
`;

export const MAX_NUTRITIONAL_VALUES_QUERY = gql`
  query MAX_NUTRITIONAL_VALUES {
    maxCalories: allProducts(sortBy: calories100gr_DESC, first: 1) {
      calories100gr
    }
    maxSodium: allProducts(sortBy: sodio_DESC, first: 1) {
      sodio
    }
  }
`;

export const GET_PRODUCTS = gql`
  query PRODUCT_SEARCH(
    $input: ProductWhereInput
    $search: String
    $first: Int
    $skip: Int
  ) {
    allProducts(where: $input, search: $search, first: $first, skip: $skip) {
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
        name
        type
        color
        icon {
          publicUrlTransformed
        }
      }
      store {
        name
        id
      }
    }
  }
`;

export const SEARCH_TITLE = gql`
  query SEARCH_TITLE_QUERY($searchTerm: String!) {
    products: allProducts(
      where: {
        status: "AVAILABLE"
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
      first: 4
    ) {
      id
      name
    }
    categories: allCategories(
      where: {
        type: "PREFERENCE"
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
      first: 4
    ) {
      id
      name
    }
    illnesses: allCategories(
      where: {
        type: "ILLNESS"
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
      first: 4
    ) {
      id
      name
    }
    stores: allStores(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
      first: 4
    ) {
      id
      name
    }
  }
`;

export const PRODUCT_OFFERS_QUERY = gql`
  query PRODUCT_OFFERS {
    allProducts(where: { salePrice_not: null, status: "AVAILABLE" }, first: 4) {
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
        name
        type
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

export const TOP_STORE_PRODUCTS_QUERY = gql`
  query TOP_STORE_PRODUCTS($storeId: ID!, $selectedProductId: ID!) {
    allProducts(
      where: {
        id_not: $selectedProductId
        store: { id: $storeId }
        status: "AVAILABLE"
      }
      first: 4
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
        name
        color
        type
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

export const TOP_SIMILAR_PRODUCTS_QUERY = gql`
  query TOP_SIMILAR_PRODUCTS($categories: [ID]!, $productId: ID!) {
    allProducts(
      where: {
        category_some: { id_in: $categories }
        id_not: $productId
        status: "AVAILABLE"
      }
      first: 4
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
