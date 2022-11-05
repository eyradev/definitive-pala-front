/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { LineItem } from "generated/graphql";
import { useRemoveCartItemMutation } from "graphql/remove-cart-item/remove-cart-item.mutation";
import { FC } from "react";
import { Card, CardProps } from "reactstrap";
import { formatCurrency } from "util/currency";
import { DeepPartial } from "util/ts-types";
import styles from "./CartItem.module.css";

const CartItem: FC<{
  lineItem: DeepPartial<LineItem>;
  onDeleteClick?: () => Promise<void>;
}> = ({ lineItem, onDeleteClick }) => {
  // validate line line item required fields
  const { price, product, quantity } = lineItem;
  if (!quantity || !price || !product) {
    return null;
  }

  // validate line item product required fields
  let productName = product?.name;
  const productImage = product?.photo?.at(0)?.image?.publicUrlTransformed;

  if (!productName) return null;
  if (productName.length > 20) {
    productName = `${productName.substring(0, 17)}...`;
  }

  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        {productImage ? (
          <img src={productImage} />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "lightgray",
            }}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3>{productName}</h3>
        <div className={styles.footer}>
          <p>
            {formatCurrency(price)} &times; {quantity}
          </p>
        </div>
      </div>
      {onDeleteClick ? (
        <p className={styles.delete} onClick={onDeleteClick}>
          <i className="fas fa-trash" />
        </p>
      ) : null}
    </Card>
  );
};

export default CartItem;
