/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TOP_CATEGORIES
// ====================================================

export interface TOP_CATEGORIES_allCategories_icon {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface TOP_CATEGORIES_allCategories {
  __typename: "Category";
  id: string;
  name: string | null;
  color: string | null;
  icon: TOP_CATEGORIES_allCategories_icon | null;
}

export interface TOP_CATEGORIES {
  /**
   *  Search for all Category items which match the where clause. 
   */
  allCategories: (TOP_CATEGORIES_allCategories | null)[] | null;
}
