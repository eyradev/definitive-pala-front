/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: REGIONS
// ====================================================

export interface REGIONS_allRegions {
  __typename: "Region";
  id: string;
  name: string | null;
  shortName: string | null;
}

export interface REGIONS {
  /**
   *  Search for all Region items which match the where clause. 
   */
  allRegions: (REGIONS_allRegions | null)[] | null;
}
