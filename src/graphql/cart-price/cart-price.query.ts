import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCartItemsQuery } from "graphql/cart-items/cart-items.query";
import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import { useCurrentCartQuery } from "graphql/current-cart/current-cart.query";
import { CART_PRICE, CART_PRICEVariables } from "./__generated__/CART_PRICE";

export const CART_PRICE_QUERY = gql`
  query CART_PRICE($cartId: ID, $storeCouponId: ID, $palanteCouponId: ID) {
    CartPrice(
      where: {
        cartId: $cartId
        storeCouponId: $storeCouponId
        palanteCouponId: $palanteCouponId
      }
    ) {
      basePrice
      storeDiscount
      palanteDiscount
      total
      storeTotal
      palanteTotal
      tax
    }
  }
`;

export const useCartPriceQuery = (
  options?: QueryHookOptions<CART_PRICE, CART_PRICEVariables>
) => {
  const { data: cart } = useCurrentCartQuery();
  const { data: cartStore } = useCartStoreQuery();
  const { data: cartItems } = useCartItemsQuery();

  const notInvocable =
    !cart?.id || !cartStore?.cart?.store?.id || !cartItems?.items?.length;

  const cartPriceQuery = useQuery<CART_PRICE, CART_PRICEVariables>(
    CART_PRICE_QUERY,
    {
      ...options,
      variables: {
        cartId: cart?.id,
      },
      skip: notInvocable,
    }
  );

  if (!notInvocable) return cartPriceQuery;
};
