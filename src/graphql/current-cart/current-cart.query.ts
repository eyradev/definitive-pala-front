import { LazyQueryHookOptions, useLazyQuery } from "@apollo/client";
import gql from "graphql-tag";
import useUserPP from "hooks/useUserPP";
import { useEffect } from "react";
import {
  CURRENT_CART,
  CURRENT_CARTVariables,
  CURRENT_CART_cart,
} from "./__generated__/CURRENT_CART";

export const CURRENT_CART_QUERY = gql`
  query CURRENT_CART($userId: ID!) {
    cart: allSellOrders(
      first: 1
      where: { user: { id: $userId }, state: "CART" }
    ) {
      id
    }
  }
`;

export const useCurrentCartQuery = (
  options?: LazyQueryHookOptions<CURRENT_CART, CURRENT_CARTVariables>
) => {
  const { user } = useUserPP();
  const [getCurrentCart, currentCartData] = useLazyQuery<
    CURRENT_CART,
    CURRENT_CARTVariables
  >(CURRENT_CART_QUERY, options);

  useEffect(() => {
    if (!user?.id) return;
    getCurrentCart({
      variables: { userId: user.id },
    });
  }, [user?.id, getCurrentCart]);

  let cart: CURRENT_CART_cart | undefined = undefined;
  if (currentCartData?.data?.cart?.length) {
    cart = currentCartData.data.cart[0] ?? undefined;
  }

  return { ...currentCartData, data: cart };
};
