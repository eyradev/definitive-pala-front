import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { CITIES, CITIESVariables } from "./__generated__/CITIES";

export const CITIES_QUERY = gql`
  query CITIES($regionId: ID) {
    allCities(where: { region: { id: $regionId } }) {
      id
      name
      shortName
    }
  }
`;

export const useCitiesQuery = (
  options?: QueryHookOptions<CITIES, CITIESVariables>
) => {
  return useQuery<CITIES, CITIESVariables>(CITIES_QUERY, options);
};
