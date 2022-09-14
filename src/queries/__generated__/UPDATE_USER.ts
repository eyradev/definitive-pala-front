/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressWhereUniqueInput, CategoryWhereUniqueInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_USER
// ====================================================

export interface UPDATE_USER_updateUser_address {
  __typename: "Address";
  addressL1: string | null;
  id: string;
}

export interface UPDATE_USER_updateUser_category {
  __typename: "Category";
  name: string | null;
}

export interface UPDATE_USER_updateUser {
  __typename: "User";
  id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  identificationType: string | null;
  identification: string | null;
  address: UPDATE_USER_updateUser_address[];
  category: UPDATE_USER_updateUser_category[];
}

export interface UPDATE_USER {
  /**
   *  Update a single User item by ID. 
   */
  updateUser: UPDATE_USER_updateUser | null;
}

export interface UPDATE_USERVariables {
  Addressconnect: (AddressWhereUniqueInput | null)[];
  Categoryconnect: (CategoryWhereUniqueInput | null)[];
  Categorydisconnect: (CategoryWhereUniqueInput | null)[];
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  docType: string;
  docNumber: string;
}
