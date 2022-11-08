/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CONFIGURATION
// ====================================================

export interface CONFIGURATION_Configuration {
  __typename: "Configuration";
  epaycoId: string;
  minCheckoutAmount: number;
  taxValue: number;
}

export interface CONFIGURATION {
  Configuration: CONFIGURATION_Configuration | null;
}
