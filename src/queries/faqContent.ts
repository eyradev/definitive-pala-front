import gql from 'graphql-tag';

export const FAQ_CONTENT_QUERY = gql`
  query FAQ_CONTENT {
    allFaqContents {
      question
      subQuestion1
      subAnswer1
      subQuestion2
      subAnswer2
      subQuestion3
      subAnswer3
      questionId
    }
  }
`;
