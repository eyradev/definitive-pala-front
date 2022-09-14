/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ContactRequestCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ADD_CONTACT_REQUEST
// ====================================================

export interface ADD_CONTACT_REQUEST_createContactRequest {
  __typename: "ContactRequest";
  id: string;
}

export interface ADD_CONTACT_REQUEST {
  /**
   *  Create a single ContactRequest item. 
   */
  createContactRequest: ADD_CONTACT_REQUEST_createContactRequest | null;
}

export interface ADD_CONTACT_REQUESTVariables {
  data?: ContactRequestCreateInput | null;
}
