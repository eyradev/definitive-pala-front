import gql from 'graphql-tag';

export const ADD_REVIEW_MUTATION = gql`
  mutation ADD_REVIEW($productId: ID!, $score: Int!, $comment: String!) {
    addReview(productId: $productId, score: $score, comment: $comment) {
      id
    }
  }
`;
