/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRemoveCartItemMutation } from "graphql/remove-cart-item/remove-cart-item.mutation";
import { Card, CardProps } from "reactstrap";
import styles from "./CartItem.module.css";

interface Props extends Omit<CardProps, "className"> {
  productName: string;
  quantity: number;
  productImage: string;
  lineItemId: string;
  price: number;
}

export default function CartItem({
  title,
  productImage,
  lineItemId,
  productName: originalProductName,
  quantity,
  price,
  ...cardProps
}: Props): JSX.Element | null {
  const removeCartItemMutation = useRemoveCartItemMutation();

  if (!removeCartItemMutation) return null;

  const [removeLineItem, { loading: removeItemLoading }] =
    removeCartItemMutation;

  let productName = originalProductName;

  if (productName && productName.length > 14) {
    productName = `${productName.substring(0, 11)}...`;
  }

  const handleLineItemDeleteClick = async () => {
    if (removeItemLoading) return;

    await removeLineItem({
      variables: {
        lineItemId: lineItemId,
      },
    });
  };

  return (
    <Card className={styles.card} {...cardProps}>
      <div className={styles.imageContainer}>
        <img src={productImage} />
      </div>

      <div className={styles.content}>
        <h3>{productName}</h3>
        <div className={styles.footer}>
          <p>
            ${price} &times; {quantity}
          </p>
        </div>
      </div>
      <p className={styles.delete} onClick={handleLineItemDeleteClick}>
        <i className="fas fa-trash" />
      </p>
    </Card>
  );
}
