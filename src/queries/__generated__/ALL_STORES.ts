/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_STORES
// ====================================================

export interface ALL_STORES_allStores {
  __typename: "Store";
  id: string;
  name: string | null;
}

export interface ALL_STORES {
  /**
   *  Search for all Store items which match the where clause. 
   */
  allStores: (ALL_STORES_allStores | null)[] | null;
}
