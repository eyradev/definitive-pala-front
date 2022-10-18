import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useUserPP from "hooks/useUserPP";
import { CART } from "./__generated__/CART";

const CART_QUERY = gql`
  query CART {
    Cart {
      sellOrder {
        lineItem {
          id
          price
          product {
            id
            name
            description
            hasTax
            photo(first: 1) {
              altText
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
      deletedItems {
        id
      }
      updatedItems {
        id
      }
      priceBreakdown {
        basePrice
        totalPrice
      }
    }
  }
`;

export function useCartQuery(options?: QueryHookOptions<CART>) {
  const { user } = useUserPP();
  const queryData = useQuery<CART>(CART_QUERY, {
    ...options,
    fetchPolicy: "network-only",
    skip: !user?.id,
  });

  return queryData;
}
