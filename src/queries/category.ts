import gql from 'graphql-tag';

export const GET_ALL_PREFERENCES = gql`
  query ALL_PREFERENCES {
    allCategories(where: { type: "PREFERENCE" }) {
      id
      name
    }
  }
`;

export const GET_ALL_ILLNESSES = gql`
  query ALL_ILLNESSES {
    allCategories(where: { type: "ILLNESS" }) {
      id
      name
    }
  }
`;

export const TOP_CATEGORIES_QUERY = gql`
  query TOP_CATEGORIES {
    allCategories(where: { icon_not: null, type: "PREFERENCE" }, first: 8) {
      id
      name
      color
      icon {
        publicUrlTransformed
      }
    }
  }
`;
