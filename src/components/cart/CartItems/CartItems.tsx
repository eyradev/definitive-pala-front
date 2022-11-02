import { LineItem } from "generated/graphql";
import { FC } from "react";
import { DeepPartial } from "../../../util/ts-types";
import { CartItem } from "../CartItem";
import styles from "./CartItems.module.css";

const CartItems: FC<{
  lineItems: (Omit<DeepPartial<LineItem>, "sellOrder" | "id"> & {
    id: LineItem["id"];
  })[];
  onLineItemDelete?: (lineItemId: string) => Promise<void>;
}> = ({ lineItems, onLineItemDelete }) => {
  if (!lineItems?.length) return null;

  const handleLineItemDelete = onLineItemDelete
    ? (lineItemId: string) => async () => {
        await onLineItemDelete(lineItemId);
      }
    : undefined;

  return (
    <div className={styles.root}>
      {lineItems.map((lineItem) => (
        <div key={lineItem.id} className={styles.lineItem}>
          <CartItem
            lineItem={lineItem}
            onDeleteClick={
              handleLineItemDelete
                ? handleLineItemDelete(lineItem.id)
                : undefined
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
