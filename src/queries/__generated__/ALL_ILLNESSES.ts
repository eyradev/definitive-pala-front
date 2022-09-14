/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_ILLNESSES
// ====================================================

export interface ALL_ILLNESSES_allCategories {
  __typename: "Category";
  id: string;
  name: string | null;
}

export interface ALL_ILLNESSES {
  /**
   *  Search for all Category items which match the where clause. 
   */
  allCategories: (ALL_ILLNESSES_allCategories | null)[] | null;
}
