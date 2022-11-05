import { Address } from "generated/graphql";
import { useUserAddressesQuery } from "graphql/user-addresses/user-addresses.query";
import { Spinner } from "reactstrap";
import AddressList from "../AddressList/AddressList";

const UserAddressesSection: React.FC = () => {
  const userAddressesQuery = useUserAddressesQuery();
  if (!userAddressesQuery) return null;

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

  return <AddressList addresses={addresses} />;
};

export default UserAddressesSection;
