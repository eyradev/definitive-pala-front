/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_ADDRESS
// ====================================================

export interface DELETE_ADDRESS_deleteAddress {
  __typename: "Address";
  id: string;
}

export interface DELETE_ADDRESS {
  /**
   *  Delete a single Address item by ID. 
   */
  deleteAddress: DELETE_ADDRESS_deleteAddress | null;
}

export interface DELETE_ADDRESSVariables {
  addressId: string;
}
