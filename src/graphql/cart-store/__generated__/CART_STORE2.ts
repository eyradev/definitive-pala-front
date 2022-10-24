/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART_STORE2
// ====================================================

export interface CART_STORE2_cart_store_address_city_region {
  __typename: "Region";
  name: string | null;
}

export interface CART_STORE2_cart_store_address_city {
  __typename: "City";
  name: string | null;
  region: CART_STORE2_cart_store_address_city_region | null;
}

export interface CART_STORE2_cart_store_address {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  city: CART_STORE2_cart_store_address_city | null;
}

export interface CART_STORE2_cart_store {
  __typename: "Store";
  id: string;
  name: string | null;
  address: CART_STORE2_cart_store_address | null;
}

export interface CART_STORE2_cart {
  __typename: "SellOrder";
  id: string;
  store: CART_STORE2_cart_store | null;
}

export interface CART_STORE2 {
  /**
   *  Search for the SellOrder item with the matching ID. 
   */
  cart: CART_STORE2_cart | null;
}

export interface CART_STORE2Variables {
  cartId: string;
}
