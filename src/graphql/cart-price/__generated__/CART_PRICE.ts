/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART_PRICE
// ====================================================

export interface CART_PRICE_CartPrice {
  __typename: "CartPrice";
  basePrice: number;
  storeDiscount: number;
  palanteDiscount: number;
  total: number;
  storeTotal: number;
  palanteTotal: number;
  palanteTax: number;
  storeTax: number;
  canCheckout: boolean;
}

export interface CART_PRICE {
  CartPrice: CART_PRICE_CartPrice | null;
}

export interface CART_PRICEVariables {
  cartId?: string | null;
  storeCouponId?: string | null;
  palanteCouponId?: string | null;
}
