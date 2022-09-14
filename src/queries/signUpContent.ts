import gql from 'graphql-tag';

export const SIGNUP_CONTENT_QUERY = gql`
  query SIGNUP_CONTENT {
    allSignUpContents {
      paragraph1
      description1
      paragraph2
      description2
      paragraph3
      description3
    }
  }
`;
