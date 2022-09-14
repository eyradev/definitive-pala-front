/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_ADDRESS
// ====================================================

export interface CREATE_ADDRESS_createAddress {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  description: string | null;
}

export interface CREATE_ADDRESS {
  /**
   *  Create a single Address item. 
   */
  createAddress: CREATE_ADDRESS_createAddress | null;
}

export interface CREATE_ADDRESSVariables {
  address?: string | null;
  description?: string | null;
}
