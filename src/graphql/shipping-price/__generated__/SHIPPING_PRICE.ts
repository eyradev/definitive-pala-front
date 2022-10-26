/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SHIPPING_PRICE
// ====================================================

export interface SHIPPING_PRICE_shippingPrice {
  __typename: "GetShippingPriceResponse";
  nightSurcharge: number | null;
  totalService: number | null;
}

export interface SHIPPING_PRICE {
  shippingPrice: SHIPPING_PRICE_shippingPrice | null;
}

export interface SHIPPING_PRICEVariables {
  storeAddressId: string;
  customerAddressId: string;
}
