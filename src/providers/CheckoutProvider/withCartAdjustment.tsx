/* eslint-disable react/display-name */
import { useAdjustCartMutation } from "graphql/adjust-cart/adjust-cart.mutation";
import { useShippingQuery } from "graphql/shipping/shipping.query";
import { useRouter } from "next/router";
import { ComponentType, useEffect, useState } from "react";
import { SHIPPING_QUERY } from "graphql/shipping/shipping.query";
import { Loading } from "components/UI";

const withCartAdjustment =
  <P extends object>(Component: ComponentType<P>): React.FC<P> =>
  (props) => {
    const router = useRouter();

    // updated when everything has been refetched
    const [cartAdjusted, setCartAdjusted] = useState(false);

    const shippingQuery = useShippingQuery();

    const adjustCartMutation = useAdjustCartMutation({
      onCompleted: () => {
        setCartAdjusted(true);
      },
      onError: () => {
        router.push("/");
      },
      awaitRefetchQueries: true,
    });

    const refetchShipping = shippingQuery?.refetch;
    const adjustCart = adjustCartMutation?.[0];

    // when the page loads the cart must be updated
    useEffect(() => {
      if (!adjustCart || !refetchShipping || cartAdjusted) return;
      (async () => {
        await refetchShipping();
        await adjustCart();
      })();
    }, [adjustCart, refetchShipping, cartAdjusted]);

    if (!adjustCartMutation) return null;

    // wait for the cart to be updated
    if (!cartAdjusted) return <Loading />;

    return <Component {...(props as P)} />;
  };

export default withCartAdjustment;