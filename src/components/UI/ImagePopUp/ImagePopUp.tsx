import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";
import { Modal } from "reactstrap";
import styles from "./ImagePopUp.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageUrl: string;
  children?: ReactNode;
}

export default function ImagePopUp({ imageUrl, children, ...divProps }: Props) {
  const [modal, setModal] = useState(false);

  const handleModalToggle = () => {
    setModal((modal) => !modal);
  };

  return (
    <>
      <div {...divProps} onClick={handleModalToggle} className={styles.root}>
        {children}
      </div>
      <Modal
        isOpen={modal}
        toggle={handleModalToggle}
        style={{
          width: "100%",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "10px solid white",
            width: "100%",
            height: "70vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={imageUrl}
            alt="product image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Modal>
    </>
  );
}
