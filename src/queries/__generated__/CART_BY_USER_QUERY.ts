/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART_BY_USER_QUERY
// ====================================================

export interface CART_BY_USER_QUERY_allSellOrders_shippingOrder_address_city {
  __typename: "City";
  name: string | null;
}

export interface CART_BY_USER_QUERY_allSellOrders_shippingOrder_address {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  description: string | null;
  city: CART_BY_USER_QUERY_allSellOrders_shippingOrder_address_city | null;
}

export interface CART_BY_USER_QUERY_allSellOrders_shippingOrder {
  __typename: "ShippingOrder";
  id: string;
  state: string | null;
  price: number | null;
  address: CART_BY_USER_QUERY_allSellOrders_shippingOrder_address | null;
}

export interface CART_BY_USER_QUERY_allSellOrders_coupons_owner {
  __typename: "Store";
  id: string;
}

export interface CART_BY_USER_QUERY_allSellOrders_coupons {
  __typename: "Coupon";
  id: string;
  name: string | null;
  shortName: string | null;
  description: string | null;
  owner: CART_BY_USER_QUERY_allSellOrders_coupons_owner | null;
  type: string | null;
  amount: number | null;
}

export interface CART_BY_USER_QUERY_allSellOrders {
  __typename: "SellOrder";
  id: string;
  siigoId: string | null;
  shippingOrder: CART_BY_USER_QUERY_allSellOrders_shippingOrder | null;
  coupons: CART_BY_USER_QUERY_allSellOrders_coupons[];
}

export interface CART_BY_USER_QUERY {
  /**
   *  Search for all SellOrder items which match the where clause. 
   */
  allSellOrders: (CART_BY_USER_QUERY_allSellOrders | null)[] | null;
}

export interface CART_BY_USER_QUERYVariables {
  userId: string;
}
