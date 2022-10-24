import { useCartStoreQuery } from "graphql/cart-store/cart-store.query";
import { FC } from "react";

const CartStoreComponent: FC = () => {
  const { data, loading, error } = useCartStoreQuery();

  if (loading) return <p>Loading ...</p>;
  if (error) return null;

  const store = data?.cart?.store;
  if (!store) return <p>El carrito no tiene tienda</p>;
  const { name, address } = store;
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <div>
        <strong>Tienda</strong>: {name}
      </div>
      <div>
        <strong>direccion</strong>: {address?.addressL1}, {address?.city?.name},{" "}
        {address?.city?.region?.name}
      </div>
    </div>
  );
};

export default CartStoreComponent;
