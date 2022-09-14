/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MAX_NUTRITIONAL_VALUES
// ====================================================

export interface MAX_NUTRITIONAL_VALUES_maxCalories {
  __typename: "Product";
  calories100gr: number | null;
}

export interface MAX_NUTRITIONAL_VALUES_maxSodium {
  __typename: "Product";
  sodio: number | null;
}

export interface MAX_NUTRITIONAL_VALUES {
  /**
   *  Search for all Product items which match the where clause. 
   */
  maxCalories: (MAX_NUTRITIONAL_VALUES_maxCalories | null)[] | null;
  /**
   *  Search for all Product items which match the where clause. 
   */
  maxSodium: (MAX_NUTRITIONAL_VALUES_maxSodium | null)[] | null;
}
