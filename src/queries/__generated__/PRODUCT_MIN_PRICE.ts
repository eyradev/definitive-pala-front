/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PRODUCT_MIN_PRICE
// ====================================================

export interface PRODUCT_MIN_PRICE_allProducts {
  __typename: "Product";
  price: number | null;
}

export interface PRODUCT_MIN_PRICE {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (PRODUCT_MIN_PRICE_allProducts | null)[] | null;
}
