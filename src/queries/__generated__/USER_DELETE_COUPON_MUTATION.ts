/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: USER_DELETE_COUPON_MUTATION
// ====================================================

export interface USER_DELETE_COUPON_MUTATION_userDeleteCoupon {
  __typename: "SellOrder";
  id: string;
}

export interface USER_DELETE_COUPON_MUTATION {
  userDeleteCoupon: USER_DELETE_COUPON_MUTATION_userDeleteCoupon | null;
}

export interface USER_DELETE_COUPON_MUTATIONVariables {
  couponId?: string | null;
}
