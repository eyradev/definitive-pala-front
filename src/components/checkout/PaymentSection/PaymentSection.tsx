import { tcUrl } from "config";
import useEpaycoScript from "hooks/useEpaycoScript";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Input, Label } from "reactstrap";
import EpaycoButton from "../EpaycoButton/EpaycoButton";

const PaymentSection: React.FC = () => {
  const { epayco, isScriptLoaded } = useEpaycoScript();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handlePayClick = useCallback(() => {
    if (!isScriptLoaded || !epayco?.open) return;
    console.log("hola");
  }, [isScriptLoaded, epayco]);

  if (!isScriptLoaded) return null;

  const handleTermsCheckBoxCange = () => {
    setTermsAccepted((termsAccepted) => !termsAccepted);
  };

  return (
    <div>
      <Label check>
        <EpaycoButton disabled={!termsAccepted} onClick={handlePayClick} />
        <Input
          checked={termsAccepted}
          onChange={handleTermsCheckBoxCange}
          type="checkbox"
        />
        <span className="form-check-sign" />
        <Link href={tcUrl || "#"} target="_blank">
          Acepto los términos y condiciones
        </Link>
      </Label>
    </div>
  );
};

export default PaymentSection;
