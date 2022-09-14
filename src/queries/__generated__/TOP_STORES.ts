/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TOP_STORES
// ====================================================

export interface TOP_STORES_allStores_logo {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface TOP_STORES_allStores_banner {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface TOP_STORES_allStores {
  __typename: "Store";
  id: string;
  logo: TOP_STORES_allStores_logo | null;
  banner: TOP_STORES_allStores_banner | null;
  name: string | null;
  description: string | null;
}

export interface TOP_STORES {
  /**
   *  Search for all Store items which match the where clause. 
   */
  allStores: (TOP_STORES_allStores | null)[] | null;
}
