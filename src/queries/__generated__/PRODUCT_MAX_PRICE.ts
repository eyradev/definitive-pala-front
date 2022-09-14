/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PRODUCT_MAX_PRICE
// ====================================================

export interface PRODUCT_MAX_PRICE_allProducts {
  __typename: "Product";
  price: number | null;
}

export interface PRODUCT_MAX_PRICE {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (PRODUCT_MAX_PRICE_allProducts | null)[] | null;
}
