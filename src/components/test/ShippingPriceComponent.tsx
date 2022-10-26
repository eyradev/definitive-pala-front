import { useShippingPriceQuery } from "graphql/shipping-price/shipping-price.query";
import { FC } from "react";
import { formatCurrency } from "util/currency";

const ShippingPriceComponent: FC = () => {
  const shippingPriceQuery = useShippingPriceQuery();
  if (!shippingPriceQuery) return null;

  const { data, loading, error } = shippingPriceQuery;
  if (loading) return <p>Loading ...</p>;
  if (error) return null;
  if (!data?.shippingPrice) return null;

  const { nightSurcharge, totalService } = data?.shippingPrice;

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Shipping Price</h3>
      <div>
        <strong>totalService</strong>: {formatCurrency(totalService)}
      </div>
      <div>
        <strong>nightSurcharge</strong>: {formatCurrency(nightSurcharge)}
      </div>
    </div>
  );
};

export default ShippingPriceComponent;
