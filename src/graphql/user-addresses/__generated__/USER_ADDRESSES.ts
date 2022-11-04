/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: USER_ADDRESSES
// ====================================================

export interface USER_ADDRESSES_allAddresses_city_region {
  __typename: "Region";
  id: string;
  name: string | null;
}

export interface USER_ADDRESSES_allAddresses_city {
  __typename: "City";
  id: string;
  name: string | null;
  region: USER_ADDRESSES_allAddresses_city_region | null;
}

export interface USER_ADDRESSES_allAddresses {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  description: string | null;
  city: USER_ADDRESSES_allAddresses_city | null;
}

export interface USER_ADDRESSES {
  /**
   *  Search for all Address items which match the where clause. 
   */
  allAddresses: (USER_ADDRESSES_allAddresses | null)[] | null;
}

export interface USER_ADDRESSESVariables {
  userId: string;
}
