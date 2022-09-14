/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_LINE_ITEM
// ====================================================

export interface ADD_LINE_ITEM_addToCart_product {
  __typename: "Product";
  id: string;
  name: string | null;
}

export interface ADD_LINE_ITEM_addToCart {
  __typename: "LineItem";
  id: string;
  product: ADD_LINE_ITEM_addToCart_product | null;
  quantity: number | null;
}

export interface ADD_LINE_ITEM {
  addToCart: ADD_LINE_ITEM_addToCart | null;
}

export interface ADD_LINE_ITEMVariables {
  productId: string;
  quantity: number;
}
