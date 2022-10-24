/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_CART_ADDRESS
// ====================================================

export interface UPDATE_CART_ADDRESS_updateCartAddress {
  __typename: "UpdateCartAddressResponse";
  sellOrderId: string;
}

export interface UPDATE_CART_ADDRESS {
  updateCartAddress: UPDATE_CART_ADDRESS_updateCartAddress | null;
}

export interface UPDATE_CART_ADDRESSVariables {
  addressId: string;
}
