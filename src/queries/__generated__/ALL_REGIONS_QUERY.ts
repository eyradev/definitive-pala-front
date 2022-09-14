/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_REGIONS_QUERY
// ====================================================

export interface ALL_REGIONS_QUERY_allRegions_cities {
  __typename: "City";
  id: string;
  name: string | null;
}

export interface ALL_REGIONS_QUERY_allRegions {
  __typename: "Region";
  id: string;
  name: string | null;
  cities: ALL_REGIONS_QUERY_allRegions_cities[];
}

export interface ALL_REGIONS_QUERY {
  /**
   *  Search for all Region items which match the where clause. 
   */
  allRegions: (ALL_REGIONS_QUERY_allRegions | null)[] | null;
}
