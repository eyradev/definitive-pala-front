/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: COUPON
// ====================================================

export interface COUPON_coupons_owner {
  __typename: "Store";
  id: string;
}

export interface COUPON_coupons {
  __typename: "Coupon";
  id: string;
  type: string | null;
  name: string | null;
  shortName: string | null;
  minCartAmount: number | null;
  quantity: number | null;
  endDate: string | null;
  owner: COUPON_coupons_owner | null;
}

export interface COUPON {
  /**
   *  Search for all Coupon items which match the where clause. 
   */
  coupons: (COUPON_coupons | null)[] | null;
}

export interface COUPONVariables {
  storeId?: string | null;
  couponCode: string;
}
