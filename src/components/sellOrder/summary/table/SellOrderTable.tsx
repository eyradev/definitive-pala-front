import { useQuery } from '@apollo/client';
import { Spinner, Table } from 'reactstrap';
import { SELL_ORDER } from 'queries/sell-order';
import {
  SELL_ORDER_QUERY,
  SELL_ORDER_QUERYVariables
} from 'queries/__generated__/SELL_ORDER_QUERY';
import { formatCurrency } from 'util/currency';
import styles from './styles.module.css';

interface Props {
  sellOrderId: string;
}

export default function SellOrderTable({ sellOrderId }: Props): JSX.Element {
  const { loading, data, error } = useQuery<
    SELL_ORDER_QUERY,
    SELL_ORDER_QUERYVariables
  >(SELL_ORDER, {
    variables: { sellOrderId }
  });

  if (loading) return <Spinner size="md" />;
  if (error) return <p className="text-danger">{error.message}</p>;
  if (!data?.allSellOrders || data.allSellOrders.length === 0)
    return <p>no items</p>;

  const lineItems = data.allSellOrders[0]?.lineItem;
  const coupons = data.allSellOrders[0]?.coupons;

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th className="text-ceter">#</th>
            <th>Producto</th>
            <th>Valor</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          {lineItems?.map((lineItem, idx) => (
            <tr key={lineItem.id}>
              <td>{idx + 1}</td>
              <td>{lineItem.product?.name || 'producto sin nombre'}</td>
              <td>{formatCurrency(lineItem.price)}</td>
              <td>{lineItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {coupons?.map((coupon) => (
        <div key={coupon.id} className={styles.coupon}>
          <p style={{ fontWeight: 'normal' }}>{coupon.shortName}</p>
          <p>: {coupon.name}</p>
        </div>
      ))}
    </>
  );
}
