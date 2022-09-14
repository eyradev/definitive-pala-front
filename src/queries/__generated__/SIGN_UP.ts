/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SIGN_UP
// ====================================================

export interface SIGN_UP_createUser {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface SIGN_UP {
  /**
   *  Create a single User item. 
   */
  createUser: SIGN_UP_createUser | null;
}

export interface SIGN_UPVariables {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  identificationType: string;
  identification: string;
}
