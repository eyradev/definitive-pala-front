import { useShippingQuery } from "graphql/shipping/shipping.query";
import { FC } from "react";
import { formatCurrency } from "util/currency";

const ShippingPriceComponent: FC = () => {
  const shippingQuery = useShippingQuery();
  if (!shippingQuery) return null;

  const { data, loading, error } = shippingQuery;
  if (loading) return <p>Loading ...</p>;
  if (error) return null;
  if (!data?.Shipping) return null;

  const { distance, shippingPrice } = data?.Shipping;

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Shipping Price</h3>
      <div>
        <strong>Delivery Price</strong>: {formatCurrency(shippingPrice)}
      </div>
      <div>
        <strong>distance</strong>: {distance} Km
      </div>
      <div>
        <strong>Who pays shipment</strong>:{" "}
        {data?.storePaysShipment ? "Tienda" : "Usuario"}
      </div>
    </div>
  );
};

export default ShippingPriceComponent;
