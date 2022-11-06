import { Address } from "generated/graphql";
import { useRemoveUserAddressMutation } from "graphql/remove-user-address/remove-user-address.mutation";
import { useUserAddressesQuery } from "graphql/user-addresses/user-addresses.query";
import { Spinner } from "reactstrap";
import AddressList from "../AddressList/AddressList";

const UserAddressesSection: React.FC = () => {
  const userAddressesQuery = useUserAddressesQuery();
  const removeUserAddressMutation = useRemoveUserAddressMutation();

  if (!userAddressesQuery || !removeUserAddressMutation) return null;

  const { data, error, loading } = userAddressesQuery;
  if (loading) return <Spinner />;
  if (error) return null;

  const addresses = data?.allAddresses?.reduce<Address[]>(
    (validAddresses, address) => {
      if (address) validAddresses.push(address as any);
      return validAddresses;
    },
    []
  );

  if (!addresses?.length) return null;

  const [removeUserAddress] = removeUserAddressMutation;

  const handleRemoveAddress = async (addressId: string) => {
    if (!addressId) return;
    await removeUserAddress({
      variables: {
        addressId,
      },
    });
  };

  return (
    <AddressList addresses={addresses} onAddressDelete={handleRemoveAddress} />
  );
};

export default UserAddressesSection;
