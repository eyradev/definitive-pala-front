import { Address } from "generated/graphql";
import { MouseEventHandler } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import styles from "./AddressCard.module.css";

export const AddressCard: React.FC<{
  address: Address;
  onDeleteClick?: MouseEventHandler<HTMLElement>;
}> = ({ address, onDeleteClick }) => {
  return (
    <Card className={styles.root}>
      <div className={styles.content}>
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

        {address.description ? <p>{address.description}</p> : null}
      </div>

      <CardFooter>
        {true ? (
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
