/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_SHIPPING_ORDER_MUTATION
// ====================================================

export interface ADD_SHIPPING_ORDER_MUTATION_addShippingOrder {
  __typename: "ShippingOrder";
  id: string;
}

export interface ADD_SHIPPING_ORDER_MUTATION {
  addShippingOrder: ADD_SHIPPING_ORDER_MUTATION_addShippingOrder | null;
}

export interface ADD_SHIPPING_ORDER_MUTATIONVariables {
  addressId: string;
}
