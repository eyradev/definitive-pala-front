/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CURRENT_USER
// ====================================================

export interface CURRENT_USER_authenticatedItem_address {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  description: string | null;
}

export interface CURRENT_USER_authenticatedItem_category {
  __typename: "Category";
  name: string | null;
  id: string;
  type: string | null;
}

export interface CURRENT_USER_authenticatedItem {
  __typename: "User";
  id: string;
  name: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  identificationType: string | null;
  identification: string | null;
  address: CURRENT_USER_authenticatedItem_address[];
  category: CURRENT_USER_authenticatedItem_category[];
}

export interface CURRENT_USER {
  authenticatedItem: CURRENT_USER_authenticatedItem | null;
}
