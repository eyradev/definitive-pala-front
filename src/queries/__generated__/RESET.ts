/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRedemptionErrorCode } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: RESET
// ====================================================

export interface RESET_redeemUserPasswordResetToken {
  __typename: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: string;
}

export interface RESET {
  redeemUserPasswordResetToken: RESET_redeemUserPasswordResetToken | null;
}

export interface RESETVariables {
  email: string;
  password: string;
  token: string;
}
