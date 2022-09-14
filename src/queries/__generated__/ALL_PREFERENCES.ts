/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_PREFERENCES
// ====================================================

export interface ALL_PREFERENCES_allCategories {
  __typename: "Category";
  id: string;
  name: string | null;
}

export interface ALL_PREFERENCES {
  /**
   *  Search for all Category items which match the where clause. 
   */
  allCategories: (ALL_PREFERENCES_allCategories | null)[] | null;
}
