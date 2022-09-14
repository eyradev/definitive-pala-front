/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserUpdateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UPDATE_USER_MUTATION
// ====================================================

export interface UPDATE_USER_MUTATION_updateUser {
  __typename: "User";
  id: string;
}

export interface UPDATE_USER_MUTATION {
  /**
   *  Update a single User item by ID. 
   */
  updateUser: UPDATE_USER_MUTATION_updateUser | null;
}

export interface UPDATE_USER_MUTATIONVariables {
  userId: string;
  data: UserUpdateInput;
}
