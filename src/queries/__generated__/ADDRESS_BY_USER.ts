/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ADDRESS_BY_USER
// ====================================================

export interface ADDRESS_BY_USER_allAddresses_city {
  __typename: "City";
  name: string | null;
}

export interface ADDRESS_BY_USER_allAddresses {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  description: string | null;
  city: ADDRESS_BY_USER_allAddresses_city | null;
}

export interface ADDRESS_BY_USER {
  /**
   *  Search for all Address items which match the where clause. 
   */
  allAddresses: (ADDRESS_BY_USER_allAddresses | null)[] | null;
}

export interface ADDRESS_BY_USERVariables {
  userId: string;
}
