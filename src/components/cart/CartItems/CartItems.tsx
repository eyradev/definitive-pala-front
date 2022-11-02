import { LineItem } from "generated/graphql";
import { FC } from "react";
import { DeepPartial } from "../../../util/types";
import styles from "./CartItems.module.css";

const CartItems: FC<{
  lineItems: Omit<DeepPartial<LineItem>, "sellOrder">[];
}> = ({ lineItems }) => {
  if (!lineItems?.length) return null;

  return (
    <div className={styles.root}>
      {lineItems.map((lineItem) => (
        <div key={lineItem.id} className={styles.lineItem}>
          {lineItem.id}
        </div>
      ))}
    </div>
  );
};

export default CartItems;
