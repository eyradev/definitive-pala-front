import { Address } from "generated/graphql";
import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useUpdateCartAddressMutation } from "graphql/update-cart-address/update-cart-address.mutation";
import { useUserAddressesQuery } from "graphql/user-addresses/user-addresses.query";
import { useState } from "react";
import { Button, Modal, Spinner } from "reactstrap";
import AddressList from "../AddressList/AddressList";

const UserAddressSelector: React.FC<{
  children: JSX.Element | string;
}> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const userAddressesQuery = useUserAddressesQuery();
  const cartAddressQuery = useCartAddressQuery();
  const updateCartAddressMutation = useUpdateCartAddressMutation();

  if (!userAddressesQuery || !cartAddressQuery || !updateCartAddressMutation)
    return null;

  const error = cartAddressQuery.error ?? userAddressesQuery.error;
  const loading = cartAddressQuery.loading ?? userAddressesQuery.loading;

  if (loading) {
    return (
      <Button color="primary" outline>
        <Spinner size="sm" color="primary" />
      </Button>
    );
  }

  if (error) return null;

  const addresses = userAddressesQuery.data?.allAddresses?.reduce<Address[]>(
    (validAddresses, address) => {
      if (address) validAddresses.push(address as any);
      return validAddresses;
    },
    []
  );

  if (!addresses?.length) {
    return (
      <Button outline disabled>
        {children}
      </Button>
    );
  }

  const selectedAddressId = cartAddressQuery.data?.cart?.address?.id;

  const handleModalToggle = () => {
    setModalOpen((isModalOpen) => !isModalOpen);
  };

  const [updateCartAddress, { loading: updateCartAddressLoading }] =
    updateCartAddressMutation;

  const handleAddressSelect = async (addressId: string) => {
    if (addressId === selectedAddressId) return;
    if (loading) return;
    await updateCartAddress({
      variables: {
        addressId,
      },
    });
  };

  return (
    <>
      <Button onClick={handleModalToggle} color="primary" outline>
        {children}
      </Button>
      <Modal
        isOpen={isModalOpen}
        toggle={handleModalToggle}
        style={{ maxWidth: "50%" }}
      >
        <div
          style={{ padding: "10px 20px", maxHeight: "70vh", margin: "10px 0" }}
        >
          <h2 style={{ margin: 0 }}>
            Seleccionar Dirección
            {updateCartAddressLoading ? (
              <small style={{ marginLeft: 10 }}>
                <Spinner size="md" type="grow" color="primary" />
              </small>
            ) : null}
          </h2>
          <p>Selecciona entre las direcciones creadas</p>
          <AddressList
            addresses={addresses}
            selectedAddressId={selectedAddressId}
            onAddressSelect={handleAddressSelect}
          />
          <div>
            <p
              style={{
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: 20,
                color: "gray",
              }}
            >
              {addresses?.length} / 10 Direcciones creadas
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserAddressSelector;
