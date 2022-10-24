/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART_ADDRESS
// ====================================================

export interface CART_ADDRESS_cart_address_city_region {
  __typename: "Region";
  name: string | null;
}

export interface CART_ADDRESS_cart_address_city {
  __typename: "City";
  name: string | null;
  region: CART_ADDRESS_cart_address_city_region | null;
}

export interface CART_ADDRESS_cart_address {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  city: CART_ADDRESS_cart_address_city | null;
}

export interface CART_ADDRESS_cart {
  __typename: "SellOrder";
  id: string;
  address: CART_ADDRESS_cart_address | null;
}

export interface CART_ADDRESS {
  /**
   *  Search for the SellOrder item with the matching ID. 
   */
  cart: CART_ADDRESS_cart | null;
}

export interface CART_ADDRESSVariables {
  cartId: string;
}
