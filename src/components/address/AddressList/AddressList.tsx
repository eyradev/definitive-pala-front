import { Address } from "generated/graphql";
import { AddressCard } from "../AddressCard";

const AddressList: React.FC<{
  addresses: Address[];
  onAddressSelect?: (addressId: string) => void | Promise<void>;
  onAddressDelete?: (addressId: string) => void | Promise<void>;
}> = ({ addresses, onAddressSelect, onAddressDelete }) => {
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
        <div key={address.id}>
          <AddressCard
            address={address}
            onDeleteClick={
              onAddressDelete ? handleDeleteAddress(address.id) : undefined
            }
          />
        </div>
      ))}
    </div>
  );
};

export default AddressList;
