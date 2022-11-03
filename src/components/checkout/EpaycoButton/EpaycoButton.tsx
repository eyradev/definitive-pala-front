import Image from "next/image";
import epaycoLogo from "public/images/epayco.png";
import { MouseEventHandler } from "react";
import { Button } from "reactstrap";

const EpaycoButton: React.FC<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}> = ({ onClick, type, disabled }) => {
  return (
    <div>
      <Button
        className="btn-raised btn-round"
        color={disabled ? undefined : "info"}
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={{
          minWidth: 180,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap",
          }}
        >
          Pagar con
        </div>
        <div style={{ position: "relative", width: "100%", height: "75%" }}>
          <Image
            src={epaycoLogo}
            alt="epayco logo"
            width={400}
            height={132}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Button>
    </div>
  );
};

export default EpaycoButton;
