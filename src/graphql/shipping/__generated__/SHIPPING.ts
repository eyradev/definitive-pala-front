/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingAddresses } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: SHIPPING
// ====================================================

export interface SHIPPING_Shipping {
  __typename: "Shipping";
  distance: number | null;
  shippingPrice: number | null;
}

export interface SHIPPING {
  Shipping: SHIPPING_Shipping | null;
}

export interface SHIPPINGVariables {
  cartId?: string | null;
  addresses?: ShippingAddresses | null;
}
