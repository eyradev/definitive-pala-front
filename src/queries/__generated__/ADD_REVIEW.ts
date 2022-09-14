/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_REVIEW
// ====================================================

export interface ADD_REVIEW_addReview {
  __typename: "Review";
  id: string;
}

export interface ADD_REVIEW {
  addReview: ADD_REVIEW_addReview | null;
}

export interface ADD_REVIEWVariables {
  productId: string;
  score: number;
  comment: string;
}
