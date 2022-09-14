import gql from 'graphql-tag';

export const CONTENT_BY_SECTION_QUERY = gql`
  query CONTENT_BY_SECTION($section: String!) {
    allCustomContents(
      where: { section_some: { name_contains_i: $section }, visible: true }
    ) {
      id
      heading1
      heading2
      body
      path
      image1 {
        publicUrlTransformed
      }
      image2 {
        publicUrlTransformed
      }
    }
  }
`;
