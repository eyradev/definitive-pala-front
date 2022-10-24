import { useGeneralProvider } from "providers/GeneralProvider/useGeneralProvider";

const TestComponent = () => {
  const { cart: cartQueryResult } = useGeneralProvider();
  if (!cartQueryResult) return null;

  const { data, loading, error } = cartQueryResult;

  if (!data?.Cart?.sellOrder) return null;
  const { lineItem: lineItems, address } = data?.Cart?.sellOrder;

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Line Items</h3>
      {lineItems.map((lineItem) => (
        <p key={lineItem?.product?.id ?? ""}>
          {lineItem.product?.name} x {lineItem.quantity} -- LineItemId:{" "}
          {lineItem.id}
        </p>
      ))}
      {address ? (
        <>
          <h4>Address:</h4>
          <p>{address.id}</p>
          <p>{address.addressL1}</p>
          <p>{address.city?.name}</p>
        </>
      ) : (
        <p>Car has no address associated</p>
      )}
    </div>
  );
};

export default TestComponent;
