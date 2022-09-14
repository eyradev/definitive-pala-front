/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_SELL_ORDERS
// ====================================================

export interface ALL_SELL_ORDERS_allSellOrders_shippingOrder_address {
  __typename: "Address";
  id: string;
  addressL1: string | null;
  description: string | null;
}

export interface ALL_SELL_ORDERS_allSellOrders_shippingOrder {
  __typename: "ShippingOrder";
  state: string | null;
  price: number | null;
  address: ALL_SELL_ORDERS_allSellOrders_shippingOrder_address | null;
}

export interface ALL_SELL_ORDERS_allSellOrders {
  __typename: "SellOrder";
  id: string;
  siigoId: string | null;
  state: string | null;
  shippingOrder: ALL_SELL_ORDERS_allSellOrders_shippingOrder | null;
}

export interface ALL_SELL_ORDERS {
  /**
   *  Search for all SellOrder items which match the where clause. 
   */
  allSellOrders: (ALL_SELL_ORDERS_allSellOrders | null)[] | null;
}

export interface ALL_SELL_ORDERSVariables {
  userId: string;
}
