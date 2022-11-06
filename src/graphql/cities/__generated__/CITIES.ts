/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CITIES
// ====================================================

export interface CITIES_allCities {
  __typename: "City";
  id: string;
  name: string | null;
  shortName: string | null;
}

export interface CITIES {
  /**
   *  Search for all City items which match the where clause. 
   */
  allCities: (CITIES_allCities | null)[] | null;
}

export interface CITIESVariables {
  regionId?: string | null;
}
