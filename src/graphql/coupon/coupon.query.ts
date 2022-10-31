import { LazyQueryHookOptions, useLazyQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import { COUPON, COUPONVariables } from "./__generated__/COUPON";

export const COUPON_QUERY = gql`
  query COUPON($storeId: ID, $couponCode: String!) {
    coupons: allCoupons(
      where: {
        OR: [
          { owner_is_null: true }
          { owner_is_null: false, owner: { id: $storeId } }
        ]
        shortName: $couponCode
        quantity_gt: 0
      }
      first: 1
    ) {
      id
      type
      name
      shortName
      minCartAmount
      quantity
      endDate
      owner {
        id
      }
    }
  }
`;

export const useCouponLazyQuery = (
  options?: LazyQueryHookOptions<COUPON, COUPONVariables>
) => {
  const { data: cartStoreData } = useCartStoreQuery();

  const cartStoreId = cartStoreData?.cart?.store?.id;
  const couponLazyQuery = useLazyQuery<COUPON, COUPONVariables>(
    COUPON_QUERY,
    options
  );

  if (cartStoreId) return couponLazyQuery;

  // const [storeCoupon, setStoreCoupon] = useState<COUPON_coupons | null>(null);
  // const [palanteCoupon, setPalanteCoupon] = useState<COUPON_coupons | null>(null);

  // const addCoupon = async (vars: LazyQueryHookOptions<COUPON, COUPONVariables>['variables']) => {
  //   const coupon = await
  // }

  // if (!addNotification || !cartStoreId) return;
  // if (!coupons?.length) {
  //   addNotification({ type: "danger", message: "Cupon no encontrado" });
  //   return;
  // }

  // const coupon = coupons[0];

  // if (coupon?.owner?.id && coupon?.owner?.id !== cartStoreId) {
  //   addNotification({ type: "danger", message: "Cupon invalido" });
  //   return;
  // }

  // if (coupon?.endDate && moment().diff(moment(coupon.endDate), 'h') >= 0) {
  //   addNotification({ type: "danger", message: "Cupon expirado" });
  //   return;
  // }
};
