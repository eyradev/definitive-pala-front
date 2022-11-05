import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { REGIONS } from "./__generated__/REGIONS";

export const REGIONS_QUERY = gql`
  query REGIONS {
    allRegions {
      id
      name
      shortName
    }
  }
`;

export const useRegionsQuery = (options?: QueryHookOptions<REGIONS>) => {
  return useQuery<REGIONS>(REGIONS_QUERY, options);
};
