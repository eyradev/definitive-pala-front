import useAddress from '../../../../hooks/useAddress';
import { AddressCard } from '../../../address';
import styles from './AddressSelector.module.css';

interface Props {
  canSelect?: boolean;
  canDelete?: boolean;
}

export default function AddressSelector({
  canSelect,
  canDelete
}: Props): JSX.Element {
  const { addresses, selectedAddress, selectAddress, deleteAddress } =
    useAddress();

  const handleAddressSelect = (addressId: string) => () => {
    if (!selectAddress || !canSelect) return;
    selectAddress(addressId);
  };

  const handleAddressDelete = async (addressId: string) => {
    if (!canDelete || !deleteAddress) return;
    await deleteAddress(addressId);
  };

  return (
    <div style={{ padding: '10px' }}>
      {addresses &&
        addresses.map((address) => {
          return address ? (
            <div
              key={address.id}
              className={styles.addressWrapper}
              style={{
                border:
                  canSelect && address.id === selectedAddress?.id
                    ? '1px solid var(--primary)'
                    : undefined
              }}
              onClick={canSelect ? handleAddressSelect(address.id) : undefined}
            >
              <AddressCard
                address={address}
                onDelete={canDelete ? handleAddressDelete : undefined}
              />
            </div>
          ) : null;
        })}
    </div>
  );
}
