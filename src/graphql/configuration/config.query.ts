import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { CONFIGURATION } from "./__generated__/CONFIGURATION";

export const CONFIGURATION_QUERY = gql`
  query CONFIGURATION {
    Configuration {
      epaycoId
      minCheckoutAmount
      taxValue
    }
  }
`;

export const useConfigurationQuery = (
  options?: QueryHookOptions<CONFIGURATION>
) => {
  return useQuery<CONFIGURATION>(CONFIGURATION_QUERY, options);
};
