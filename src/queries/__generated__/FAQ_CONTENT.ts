/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FAQ_CONTENT
// ====================================================

export interface FAQ_CONTENT_allFaqContents {
  __typename: "FaqContent";
  question: string | null;
  subQuestion1: string | null;
  subAnswer1: string | null;
  subQuestion2: string | null;
  subAnswer2: string | null;
  subQuestion3: string | null;
  subAnswer3: string | null;
  questionId: string | null;
}

export interface FAQ_CONTENT {
  /**
   *  Search for all FaqContent items which match the where clause. 
   */
  allFaqContents: (FAQ_CONTENT_allFaqContents | null)[] | null;
}
