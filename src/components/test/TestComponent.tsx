import { useCartItemsQuery } from "graphql/cart-items/cart-items.query";

const TestComponent = () => {
  const { data, loading, error } = useCartItemsQuery();

  if (loading) return <p>Loading ...</p>;
  if (error) return null;

  const lineItems = data?.items;
  if (!lineItems?.length) return <p>Empty cart</p>;

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Line Items</h3>
      <ol>
        {lineItems.map((lineItem) => {
          if (!lineItem) return null;
          const { id, price, quantity, product } = lineItem;
          return (
            <li
              key={id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0px 10px",
              }}
            >
              <div>
                <strong>lineItemId</strong>: {id}
              </div>
              <div>
                <strong>product</strong>: {product?.name}
              </div>

              <div>
                <strong>price</strong>: {price}
              </div>
              <div>
                <strong>quantity</strong>: {quantity}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TestComponent;
