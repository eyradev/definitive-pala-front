/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART_DETAILS_QUERY
// ====================================================

export interface CART_DETAILS_QUERY_cartDetails {
  __typename: "CartDetailsResponse";
  total: number | null;
  feeTotal: number | null;
  storeTotal: number | null;
  shippingTotal: number | null;
  discountedTotal: number | null;
  storeCouponTotal: number | null;
  palanteCouponTotal: number | null;
  canCheckout: boolean | null;
}

export interface CART_DETAILS_QUERY {
  cartDetails: CART_DETAILS_QUERY_cartDetails | null;
}
