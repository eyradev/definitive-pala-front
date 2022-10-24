/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADJUST_CART
// ====================================================

export interface ADJUST_CART_adjustments_deletedLineItems {
  __typename: "LineItem";
  id: string;
}

export interface ADJUST_CART_adjustments_updatedLineItems {
  __typename: "LineItem";
  id: string;
}

export interface ADJUST_CART_adjustments {
  __typename: "CartAdjustment";
  deletedLineItems: (ADJUST_CART_adjustments_deletedLineItems | null)[] | null;
  updatedLineItems: (ADJUST_CART_adjustments_updatedLineItems | null)[] | null;
}

export interface ADJUST_CART {
  adjustments: ADJUST_CART_adjustments | null;
}
