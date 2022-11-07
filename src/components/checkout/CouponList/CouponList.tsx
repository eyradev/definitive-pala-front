import { Coupon } from "generated/graphql";
import useCheckout from "providers/CheckoutProvider/useCheckout";
import { Card, CardBody, Spinner, UncontrolledTooltip } from "reactstrap";
import useUserPP from "../../../hooks/useUserPP";
import { CART_BY_USER_QUERY_allSellOrders_coupons } from "../../../queries/__generated__/CART_BY_USER_QUERY";
import styles from "./CouponList.module.css";

interface Props {
  coupons: CART_BY_USER_QUERY_allSellOrders_coupons[];
}

const CouponList: React.FC = () => {
  const { palanteCoupon, storeCoupon, removeCoupon } = useCheckout();
  if (!removeCoupon) return null;

  const coupons = [palanteCoupon, storeCoupon].filter(
    (coupon) => !!coupon?.id
  ) as Coupon[];
  if (!coupons.length)
    return (
      <div>
        <h3 style={{ marginBottom: 5 }}>Cupones en uso</h3>
        <p>Cuando agregues un cupón veras sus detalles en esta sección</p>
      </div>
    );

  const handleCouponDelte = (couponId: string) => () => {
    removeCoupon(couponId);
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <h3 style={{ marginBottom: 5 }}>Cupones en Uso</h3>
      <ul className={styles.coupon}>
        {coupons.map((coupon) => (
          <li key={coupon.id}>
            {coupon?.description && (
              <UncontrolledTooltip target={`coupon-${coupon.id}`}>
                {coupon.description}
              </UncontrolledTooltip>
            )}
            <p id={`coupon-${coupon.id}`} style={{ fontWeight: "normal" }}>
              {coupon.shortName} - {coupon.name}{" "}
            </p>

            <i
              id={`remove-${coupon.id}`}
              className="now-ui-icons ui-1_simple-remove"
              onClick={handleCouponDelte(coupon.id)}
              style={{ fontWeight: "bold" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouponList;
