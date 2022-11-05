import { Address } from "generated/graphql";
import { MouseEventHandler } from "react";
import { Card, CardFooter, CardHeader } from "reactstrap";
import styles from "./AddressCard.module.css";

export const AddressCard: React.FC<{
  address: Address;
  onDeleteClick?: MouseEventHandler<HTMLElement>;
  onContentClick?: MouseEventHandler<HTMLElement>;
  selected?: boolean;
}> = ({ address, selected, onDeleteClick, onContentClick }) => {
  const rootStyles = [styles.root];
  if (selected) rootStyles.push(styles.selected);
  if (onContentClick) rootStyles.push(styles.selectable);
  return (
    <Card className={rootStyles.join(" ")}>
      <div
        className={styles.content}
        onClick={!selected && onContentClick ? onContentClick : undefined}
      >
        <CardHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h3>
            {address.addressL1} <small>{address.city?.name}</small>
          </h3>
        </CardHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{address.description ? <p>{address.description}</p> : null}</div>
          {selected ? (
            <p
              style={{
                color: "var(--primary)",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              Dirección Actual
            </p>
          ) : null}
        </div>
      </div>

      <CardFooter>
        {onDeleteClick ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "baseline",
            }}
          >
            <i
              className="fas fa-trash"
              style={{ color: "var(--danger)" }}
              onClick={onDeleteClick}
            />
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default AddressCard;
