/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REMOVE_CART_ITEM
// ====================================================

export interface REMOVE_CART_ITEM_removeFromCart_lineItem {
  __typename: "LineItem";
  id: string;
}

export interface REMOVE_CART_ITEM_removeFromCart {
  __typename: "RemoveFromCartResponse";
  lineItem: REMOVE_CART_ITEM_removeFromCart_lineItem;
  storeUpdated: boolean;
  lineItemDeleted: boolean;
}

export interface REMOVE_CART_ITEM {
  removeFromCart: REMOVE_CART_ITEM_removeFromCart | null;
}

export interface REMOVE_CART_ITEMVariables {
  lineItemId: string;
  quantity?: number | null;
}
