/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SELL_ORDER_QUERY
// ====================================================

export interface SELL_ORDER_QUERY_allSellOrders_lineItem_product {
  __typename: "Product";
  name: string | null;
}

export interface SELL_ORDER_QUERY_allSellOrders_lineItem {
  __typename: "LineItem";
  id: string;
  quantity: number | null;
  price: number | null;
  product: SELL_ORDER_QUERY_allSellOrders_lineItem_product | null;
}

export interface SELL_ORDER_QUERY_allSellOrders_coupons {
  __typename: "Coupon";
  id: string;
  name: string | null;
  shortName: string | null;
}

export interface SELL_ORDER_QUERY_allSellOrders {
  __typename: "SellOrder";
  lineItem: SELL_ORDER_QUERY_allSellOrders_lineItem[];
  coupons: SELL_ORDER_QUERY_allSellOrders_coupons[];
}

export interface SELL_ORDER_QUERY {
  /**
   *  Search for all SellOrder items which match the where clause. 
   */
  allSellOrders: (SELL_ORDER_QUERY_allSellOrders | null)[] | null;
}

export interface SELL_ORDER_QUERYVariables {
  sellOrderId: string;
}
