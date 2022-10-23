/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REMOVE_FROM_CART
// ====================================================

export interface REMOVE_FROM_CART_removeFromCart_lineItem {
  __typename: "LineItem";
  id: string;
  quantity: number | null;
  price: number | null;
}

export interface REMOVE_FROM_CART_removeFromCart {
  __typename: "AddToCartResponse";
  lineItem: REMOVE_FROM_CART_removeFromCart_lineItem;
}

export interface REMOVE_FROM_CART {
  removeFromCart: REMOVE_FROM_CART_removeFromCart | null;
}

export interface REMOVE_FROM_CARTVariables {
  lineItemId: string;
  quantity?: number | null;
}
