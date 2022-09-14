/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordAuthErrorCode } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SIGN_IN
// ====================================================

export interface SIGN_IN_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface SIGN_IN_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess {
  __typename: "UserAuthenticationWithPasswordSuccess";
  item: SIGN_IN_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item;
}

export interface SIGN_IN_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure {
  __typename: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: string;
}

export type SIGN_IN_authenticateUserWithPassword = SIGN_IN_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess | SIGN_IN_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure;

export interface SIGN_IN {
  authenticateUserWithPassword: SIGN_IN_authenticateUserWithPassword;
}

export interface SIGN_INVariables {
  email: string;
  password: string;
}
