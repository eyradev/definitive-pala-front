/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRequestErrorCode } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: REQUEST_RESET
// ====================================================

export interface REQUEST_RESET_sendUserPasswordResetLink {
  __typename: "SendUserPasswordResetLinkResult";
  code: PasswordResetRequestErrorCode;
  message: string;
}

export interface REQUEST_RESET {
  sendUserPasswordResetLink: REQUEST_RESET_sendUserPasswordResetLink | null;
}

export interface REQUEST_RESETVariables {
  email: string;
}
