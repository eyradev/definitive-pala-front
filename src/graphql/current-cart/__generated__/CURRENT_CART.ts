/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CURRENT_CART
// ====================================================

export interface CURRENT_CART_cart {
  __typename: "SellOrder";
  id: string;
}

export interface CURRENT_CART {
  /**
   *  Search for all SellOrder items which match the where clause. 
   */
  cart: (CURRENT_CART_cart | null)[] | null;
}

export interface CURRENT_CARTVariables {
  userId: string;
}
