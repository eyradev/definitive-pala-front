/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: WORK_WITH_US
// ====================================================

export interface WORK_WITH_US_createWorkWithUsRequest {
  __typename: "WorkWithUsRequest";
  name: string | null;
  email: string | null;
  phone: string | null;
  verified: string | null;
}

export interface WORK_WITH_US {
  /**
   *  Create a single WorkWithUsRequest item. 
   */
  createWorkWithUsRequest: WORK_WITH_US_createWorkWithUsRequest | null;
}

export interface WORK_WITH_USVariables {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  verified?: string | null;
}
