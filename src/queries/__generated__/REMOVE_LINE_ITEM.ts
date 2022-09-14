/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REMOVE_LINE_ITEM
// ====================================================

export interface REMOVE_LINE_ITEM_deleteLineItem_product {
  __typename: "Product";
  name: string | null;
}

export interface REMOVE_LINE_ITEM_deleteLineItem {
  __typename: "LineItem";
  id: string;
  product: REMOVE_LINE_ITEM_deleteLineItem_product | null;
}

export interface REMOVE_LINE_ITEM {
  /**
   *  Delete a single LineItem item by ID. 
   */
  deleteLineItem: REMOVE_LINE_ITEM_deleteLineItem | null;
}

export interface REMOVE_LINE_ITEMVariables {
  lineItemId: string;
}
