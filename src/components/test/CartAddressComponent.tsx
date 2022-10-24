import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";

const CartAddressComponent = () => {
  const { data, loading, error } = useCartAddressQuery();
  if (loading) return <p>Loading ...</p>;
  if (error) return null;

  const address = data?.cart?.address;
  if (!address) return <p>Cart has no address associated</p>;

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Address</h3>
      <p>
        {address.addressL1}, {address.city?.name}, {address.city?.region?.name}
      </p>
    </div>
  );
};

export default CartAddressComponent;
