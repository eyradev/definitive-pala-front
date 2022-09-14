import gql from 'graphql-tag';

export const ALL_REGIONS = gql`
  query ALL_REGIONS_QUERY {
    allRegions(first: 20) {
      id
      name
      cities {
        id
        name
      }
    }
  }
`;
