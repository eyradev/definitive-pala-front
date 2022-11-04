/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: REMOVE_USER_ADDRESS
// ====================================================

export interface REMOVE_USER_ADDRESS_deleteAddress {
  __typename: "Address";
  id: string;
}

export interface REMOVE_USER_ADDRESS {
  /**
   *  Delete a single Address item by ID. 
   */
  deleteAddress: REMOVE_USER_ADDRESS_deleteAddress | null;
}

export interface REMOVE_USER_ADDRESSVariables {
  addressId: string;
}
