import { MutationHookOptions, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import useCheckout from "providers/CheckoutProvider/useCheckout";
import {
  CHECKOUT_CART,
  CHECKOUT_CARTVariables,
} from "./__generated__/CHECKOUT_CART";

export const CHECKOUT_CART_MUTATION = gql`
  mutation CHECKOUT_CART($palanteCouponId: ID, $storeCouponId: ID) {
    checkoutCart(
      where: {
        palanteCouponId: $palanteCouponId
        storeCouponId: $storeCouponId
      }
    ) {
      epaycoData
    }
  }
`;

export const useCheckoutCartMutation = (
  options?: MutationHookOptions<CHECKOUT_CART, CHECKOUT_CARTVariables>
) => {
  // TODO: refetch cart
  const cartAddressQuery = useCartAddressQuery();
  const cartPriceQuery = useCartPriceQuery();
  const { storeCoupon, palanteCoupon } = useCheckout();

  const cartAddress = cartAddressQuery?.data?.cart?.address;
  const cartPrice = cartPriceQuery?.data?.CartPrice;

  const storeCouponId = storeCoupon?.id;
  const palanteCouponId = palanteCoupon?.id;

  const checkoutMutation = useMutation<CHECKOUT_CART, CHECKOUT_CARTVariables>(
    CHECKOUT_CART_MUTATION,
    {
      ...options,
      variables: {
        palanteCouponId,
        storeCouponId,
      },
    }
  );

  return {
    checkoutMutation,
    hasAddress: !!cartAddress?.id,
    hasAmount: !!cartPrice,
  };
};
