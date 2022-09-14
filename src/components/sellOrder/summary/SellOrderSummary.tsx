import { Card, CardBody, CardProps, CardTitle } from 'reactstrap';
import { Transaction } from 'models/transaction';
import { formatCurrency } from 'util/currency';
import { SellOrderTable } from './table';

interface Props extends CardProps {
  transaction: Transaction;
  pepe?: string;
}

export default function SellOrderSummary({
  transaction,
  ...cardProps
}: Props): JSX.Element {
  let stateColor = 'warning';
  switch (transaction.x_transaction_state) {
    case 'Aceptada':
      stateColor = 'success';
      break;
    case 'Rechazada':
      stateColor = 'danger';
      break;
  }

  return (
    <Card {...cardProps}>
      <CardBody>
        <CardTitle tag="h3" style={{ fontWeight: 'bold' }}>
          Orden {transaction.x_id_factura.substring(0, 8)}
        </CardTitle>
        <CardTitle tag="h4" style={{ color: `var(--${stateColor})` }}>
          {transaction.x_transaction_state}
        </CardTitle>
        <CardBody tag="p">
          {transaction.x_transaction_state === 'Rechazada' ? (
            transaction.x_response_reason_text
          ) : (
            <>
              <SellOrderTable
                sellOrderId={transaction.x_id_factura.substring(0, 24)}
              />
              <h3 style={{ marginTop: '20px', marginBottom: 0 }}>
                Total: <small>{formatCurrency(transaction.x_amount)}</small>
              </h3>
            </>
          )}
        </CardBody>
      </CardBody>
    </Card>
  );
}
