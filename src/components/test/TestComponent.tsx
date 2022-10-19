import { useGeneralProvider } from "providers/GeneralProvider/useGeneralProvider";

const TestComponent = () => {
  const { cart: cartQueryResult } = useGeneralProvider();
  if (!cartQueryResult) return null;

  const { data, loading, error } = cartQueryResult;

  console.log({ data, loading, error });
  if (!data?.Cart) return null;
  return (
    <>
      {data?.Cart?.sellOrder?.lineItem.map((lineItem) => (
        <p key={lineItem?.product?.id ?? ""}>
          {lineItem.product?.name} x {lineItem.quantity}
        </p>
      ))}
    </>
  );
};

export default TestComponent;
