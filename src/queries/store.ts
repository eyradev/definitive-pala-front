import gql from 'graphql-tag';

export const GET_ALL_STORES = gql`
  query ALL_STORES {
    allStores {
      id
      name
    }
  }
`;

export const TOP_STORES_QUERY = gql`
  query TOP_STORES {
    allStores(first: 5) {
      id
      logo {
        publicUrlTransformed
      }
      banner {
        publicUrlTransformed
      }
      name
      description
    }
  }
`;

export const CART_STORE_QUERY = gql`
  query CART_STORE {
    cartStore {
      id
      name
      siigoId
      epaycoId
    }
  }
`;
