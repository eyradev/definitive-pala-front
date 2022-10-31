import { QueryResult } from "@apollo/client";
import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import { useCouponLazyQuery } from "graphql/coupon/coupon.query";
import {
  COUPON,
  COUPONVariables,
  COUPON_coupons,
} from "graphql/coupon/__generated__/COUPON";
import useNotification from "hooks/useNotification";
import moment from "moment";
import { createContext, FC, useState } from "react";

interface CheckoutProviderContext {
  storeCoupon?: COUPON_coupons | null;
  palanteCoupon?: COUPON_coupons | null;
  addCoupon?: (couponCode: string) => Promise<COUPON_coupons | null>;
  queryData?: QueryResult<COUPON, COUPONVariables>;
}

export const CheckoutContext = createContext<CheckoutProviderContext>({});

const CheckoutProvider: FC<{
  children?: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const { addNotification } = useNotification();

  const { data: cartStoreData } = useCartStoreQuery();
  // caching will be handled by the context
  const couponLazyQuery = useCouponLazyQuery({ fetchPolicy: "network-only" });

  const store = cartStoreData?.cart?.store;

  const [storeCoupon, setStoreCoupon] = useState<COUPON_coupons | null>(null);
  const [palanteCoupon, setPalanteCoupon] = useState<COUPON_coupons | null>(
    null
  );

  if (!couponLazyQuery || !store?.id || !addNotification) return null;
  const [getCoupon, couponQueryData] = couponLazyQuery;

  const addCoupon = async (couponCode: string) => {
    const { data } = await getCoupon({ variables: { couponCode } });

    if (!data?.coupons?.length) {
      addNotification({ type: "danger", message: `Cupon ni encontrado` });
      return null;
    }

    const fetchedCoupon = data?.coupons[0];

    if (fetchedCoupon?.owner?.id && fetchedCoupon?.owner?.id !== store?.id) {
      addNotification({
        type: "danger",
        message: `El cupon ${couponCode} es invalido para la tienda ${store.name}`,
      });
      return null;
    }

    if (
      fetchedCoupon?.endDate &&
      moment().diff(moment(fetchedCoupon.endDate), "h") >= 0
    ) {
      addNotification({
        type: "danger",
        message: `El cupon ${couponCode} ya expiró`,
      });
      return null;
    }

    if (fetchedCoupon?.owner?.id) {
      setStoreCoupon(fetchedCoupon);
    } else {
      setPalanteCoupon(fetchedCoupon);
    }

    return fetchedCoupon;
  };
  return (
    <CheckoutContext.Provider
      value={{
        palanteCoupon,
        storeCoupon,
        addCoupon,
        queryData: couponQueryData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
