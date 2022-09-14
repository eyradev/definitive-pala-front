import { Card, CardHeader, Col, Row } from 'reactstrap';
import { ADDRESS_BY_USER_allAddresses } from '../../../queries/__generated__/ADDRESS_BY_USER';
import styles from './AddressCard.module.css';

interface Props {
  address: ADDRESS_BY_USER_allAddresses;
  onDelete?: (addressId: string) => void | Promise<void>;
}

export default function AddressCard({ address, onDelete }: Props): JSX.Element {
  const handleAddressDelete = (addressId: string) => async () => {
    if (!onDelete) return;
    await onDelete(addressId);
  };

  return (
    <Card className={styles.root}>
      <CardHeader>
        <h3>
          {address.addressL1} <small>{address.city?.name}</small>
        </h3>
      </CardHeader>
      <Row>
        <Col>
          {address.description && (
            <div>
              <p>{address.description}</p>
            </div>
          )}
        </Col>
        {onDelete && (
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <i
              className="fas fa-trash"
              style={{ color: 'var(--danger)' }}
              onClick={handleAddressDelete(address.id)}
            />
          </Col>
        )}
      </Row>
    </Card>
  );
}
