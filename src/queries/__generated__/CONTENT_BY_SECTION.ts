/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CONTENT_BY_SECTION
// ====================================================

export interface CONTENT_BY_SECTION_allCustomContents_image1 {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CONTENT_BY_SECTION_allCustomContents_image2 {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CONTENT_BY_SECTION_allCustomContents {
  __typename: "CustomContent";
  id: string;
  heading1: string | null;
  heading2: string | null;
  body: string | null;
  path: string | null;
  image1: CONTENT_BY_SECTION_allCustomContents_image1 | null;
  image2: CONTENT_BY_SECTION_allCustomContents_image2 | null;
}

export interface CONTENT_BY_SECTION {
  /**
   *  Search for all CustomContent items which match the where clause. 
   */
  allCustomContents: (CONTENT_BY_SECTION_allCustomContents | null)[] | null;
}

export interface CONTENT_BY_SECTIONVariables {
  section: string;
}
