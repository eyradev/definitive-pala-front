import { useMutation } from '@apollo/client';
import { Spinner, UncontrolledTooltip } from 'reactstrap';
import useNotification from '../../../hooks/useNotification';
import useUserPP from '../../../hooks/useUserPP';
import {
  CART_BY_USER,
  CART_TOTALS,
  USER_DELETE_COUPON
} from '../../../queries/sell-order';
import { CART_BY_USER_QUERY_allSellOrders_coupons } from '../../../queries/__generated__/CART_BY_USER_QUERY';
import {
  USER_DELETE_COUPON_MUTATION,
  USER_DELETE_COUPON_MUTATIONVariables
} from '../../../queries/__generated__/USER_DELETE_COUPON_MUTATION';
import styles from './CouponList.module.css';

interface Props {
  coupons: CART_BY_USER_QUERY_allSellOrders_coupons[];
}

export default function CouponList({ coupons }: Props): JSX.Element {
  const { user } = useUserPP();
  const { addNotification } = useNotification();

  const [deleteCoupon, { loading, error: deleteCouponError }] = useMutation<
    USER_DELETE_COUPON_MUTATION,
    USER_DELETE_COUPON_MUTATIONVariables
  >(USER_DELETE_COUPON, {
    refetchQueries: [
      { query: CART_TOTALS },
      { query: CART_BY_USER, variables: { userId: user?.id || '' } }
    ]
  });

  const handleCouponDelte = (couponId: string) => async () => {
    if (loading) return;

    try {
      await deleteCoupon({ variables: { couponId } });
    } catch {
      if (deleteCouponError)
        addNotification({ message: deleteCouponError.message, type: 'danger' });
    }
  };

  return (
    <ul className={styles.coupon}>
      {coupons.map((coupon) => (
        <li key={coupon.id}>
          {coupon?.description && (
            <UncontrolledTooltip target={`coupon-${coupon.id}`}>
              {coupon.description}
            </UncontrolledTooltip>
          )}
          <p id={`coupon-${coupon.id}`}>
            {coupon.shortName} - {coupon.name}{' '}
          </p>
          {!loading ? (
            <i
              id={`remove-${coupon.id}`}
              className="now-ui-icons ui-1_simple-remove"
              onClick={handleCouponDelte(coupon.id)}
            />
          ) : (
            <Spinner size="sm" className="spinner" />
          )}
        </li>
      ))}
    </ul>
  );
}
