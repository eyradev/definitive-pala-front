/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SIGNUP_CONTENT
// ====================================================

export interface SIGNUP_CONTENT_allSignUpContents {
  __typename: "signUpContent";
  paragraph1: string | null;
  description1: string | null;
  paragraph2: string | null;
  description2: string | null;
  paragraph3: string | null;
  description3: string | null;
}

export interface SIGNUP_CONTENT {
  /**
   *  Search for all signUpContent items which match the where clause. 
   */
  allSignUpContents: (SIGNUP_CONTENT_allSignUpContents | null)[] | null;
}
