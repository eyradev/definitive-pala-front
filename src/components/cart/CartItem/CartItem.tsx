/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, CardProps } from "reactstrap";
import useCart from "../../../hooks/useCart";
import useNotification from "../../../hooks/useNotification";
import { ALL_LINE_ITEMS_allLineItems } from "../../../queries/__generated__/ALL_LINE_ITEMS";
import styles from "./CartItem.module.css";

interface Props extends Omit<CardProps, "className"> {
  lineItem: ALL_LINE_ITEMS_allLineItems;
}

export default function CartItem({
  lineItem,
  ...cardProps
}: Props): JSX.Element {
  const { removeLineItem } = useCart();
  const { addNotification } = useNotification();

  let productName = lineItem.product?.name;

  if (productName && productName.length > 14) {
    productName = `${productName.substring(0, 11)}...`;
  }

  const handleLineItemDeleteClick = async () => {
    if (!addNotification) {
      console.warn("add notification not set");
      return;
    }

    const deleteItem = await removeLineItem(lineItem.id);
    if (deleteItem && !deleteItem.errors) {
      addNotification({
        message: `Se elimino ${
          deleteItem.data?.deleteLineItem?.product?.name || "producto"
        } del carrito`,
        type: "info",
      });
    } else {
      addNotification({
        message: "Error eliminando producto del carrito",
        type: "danger",
      });
    }
  };

  return (
    <Card className={styles.card} {...cardProps}>
      {lineItem.product?.photo &&
        lineItem.product.photo.length > 0 &&
        lineItem.product.photo[0].image?.publicUrlTransformed && (
          <div className={styles.imageContainer}>
            <img src={lineItem.product?.photo[0].image?.publicUrlTransformed} />
          </div>
        )}
      <div className={styles.content}>
        <h3>{productName}</h3>
        <div className={styles.footer}>
          <p>
            ${lineItem.price} &times; {lineItem.quantity}
          </p>
        </div>
      </div>
      <p className={styles.delete} onClick={handleLineItemDeleteClick}>
        <i className="fas fa-trash" />
      </p>
    </Card>
  );
}
