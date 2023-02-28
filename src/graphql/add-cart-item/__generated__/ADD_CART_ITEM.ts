/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_CART_ITEM
// ====================================================

export interface ADD_CART_ITEM_addToCart2 {
  __typename: "AddToCartResponse";
  lineItemCreated: boolean;
  cartCreated: boolean;
  storeUpdated: boolean;
}

export interface ADD_CART_ITEM {
  addToCart2: ADD_CART_ITEM_addToCart2 | null;
}

export interface ADD_CART_ITEMVariables {
  productId: string;
  quantity: number;
}
