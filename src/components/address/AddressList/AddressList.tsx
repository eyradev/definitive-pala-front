import { Address } from "generated/graphql";
import { AddressCard } from "../AddressCard";

const AddressList: React.FC<{
  addresses: Address[];
  selectedAddressId?: string;
  onAddressSelect?: (addressId: string) => void | Promise<void>;
  onAddressDelete?: (addressId: string) => void | Promise<void>;
}> = ({ addresses, onAddressSelect, onAddressDelete, selectedAddressId }) => {
  if (!addresses?.length) return null;

  const handleAddressSelect = (addressId: string) => async () => {
    if (onAddressSelect) await onAddressSelect(addressId);
  };

  const handleDeleteAddress = (addressId: string) => async () => {
    if (onAddressDelete) await onAddressDelete(addressId);
  };

  return (
    <div>
      {addresses.map((address) => (
        <div key={address.id} style={{ marginBottom: 8 }}>
          <AddressCard
            address={address}
            onDeleteClick={
              onAddressDelete ? handleDeleteAddress(address.id) : undefined
            }
            onContentClick={
              onAddressSelect ? handleAddressSelect(address.id) : undefined
            }
            selected={selectedAddressId === address.id}
          />
        </div>
      ))}
    </div>
  );
};

export default AddressList;
