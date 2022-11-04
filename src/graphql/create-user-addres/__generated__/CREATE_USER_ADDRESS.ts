/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_USER_ADDRESS
// ====================================================

export interface CREATE_USER_ADDRESS_createUserAddress {
  __typename: "CreateUserAddressOutput";
  addressId: string;
}

export interface CREATE_USER_ADDRESS {
  createUserAddress: CREATE_USER_ADDRESS_createUserAddress | null;
}

export interface CREATE_USER_ADDRESSVariables {
  userId?: string | null;
  cityId: string;
  addressL1: string;
  description: string;
}
