/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SEARCH_TITLE_QUERY
// ====================================================

export interface SEARCH_TITLE_QUERY_products {
  __typename: "Product";
  id: string;
  name: string | null;
}

export interface SEARCH_TITLE_QUERY_categories {
  __typename: "Category";
  id: string;
  name: string | null;
}

export interface SEARCH_TITLE_QUERY_illnesses {
  __typename: "Category";
  id: string;
  name: string | null;
}

export interface SEARCH_TITLE_QUERY_stores {
  __typename: "Store";
  id: string;
  name: string | null;
}

export interface SEARCH_TITLE_QUERY {
  /**
   *  Search for all Product items which match the where clause. 
   */
  products: (SEARCH_TITLE_QUERY_products | null)[] | null;
  /**
   *  Search for all Category items which match the where clause. 
   */
  categories: (SEARCH_TITLE_QUERY_categories | null)[] | null;
  /**
   *  Search for all Category items which match the where clause. 
   */
  illnesses: (SEARCH_TITLE_QUERY_illnesses | null)[] | null;
  /**
   *  Search for all Store items which match the where clause. 
   */
  stores: (SEARCH_TITLE_QUERY_stores | null)[] | null;
}

export interface SEARCH_TITLE_QUERYVariables {
  searchTerm: string;
}
