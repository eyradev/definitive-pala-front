import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useUserAddressesQuery } from "graphql/user-addresses/user-addresses.query";
import { Spinner } from "reactstrap";
import { AddressCard } from "../AddressCard";
import UserAddressCreator from "../UserAddressCreator/UserAddressCreator";
import UserAddressSelector from "../UserAddressSelectorSection/UserAddressSelectorSection";

const CurrentCartAddressSection: React.FC = () => {
  const cartAddressQuery = useCartAddressQuery();
  const userAddressesQuery = useUserAddressesQuery();

  if (!cartAddressQuery || !userAddressesQuery) return null;

  const loading = cartAddressQuery.loading ?? userAddressesQuery.loading;
  const error = cartAddressQuery.error ?? userAddressesQuery.error;

  if (loading) return <Spinner />;
  if (error) return null;

  const cartAddress = cartAddressQuery.data?.cart?.address;
  const userHasAddresses = userAddressesQuery.data?.allAddresses?.length;

  if (!userHasAddresses) {
    return (
      <div>
        <h3>Crear Dirección</h3>
        <p>Debes crear una dirección para continuar con el proceso de compra</p>
        <UserAddressCreator>Crear Dirección</UserAddressCreator>
      </div>
    );
  }

  return (
    <div>
      <h4 style={{ marginBottom: 10, marginTop: 5, fontWeight: "bold" }}>
        Dirección de Envio
      </h4>
      {cartAddress ? (
        <AddressCard address={cartAddress as any} />
      ) : (
        <p>
          No has seleccionado una dirección a la cual enviar tus productos aun
        </p>
      )}
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <UserAddressSelector>
          {cartAddress ? "Cambiar Dirección" : "Seleccionar Dirección"}
        </UserAddressSelector>
        <div style={{ width: "30px" }} />
        <UserAddressCreator>Crear Dirección</UserAddressCreator>
      </div>
    </div>
  );
};

export default CurrentCartAddressSection;
