/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ADD_UPDATE_SHIPPING_ADDRESS
// ====================================================

export interface ADD_UPDATE_SHIPPING_ADDRESS_addShippingOrder {
  __typename: "ShippingOrder";
  id: string;
}

export interface ADD_UPDATE_SHIPPING_ADDRESS {
  addShippingOrder: ADD_UPDATE_SHIPPING_ADDRESS_addShippingOrder | null;
}

export interface ADD_UPDATE_SHIPPING_ADDRESSVariables {
  addressId: string;
}
