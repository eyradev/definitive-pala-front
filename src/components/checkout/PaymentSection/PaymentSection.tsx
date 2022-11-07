import { tcUrl } from "config";
import { useCheckoutCartMutation } from "graphql/checkout-cart/checkout-cart.mutation";
import useEpaycoScript from "hooks/useEpaycoScript";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Input, Label } from "reactstrap";
import EpaycoButton from "../EpaycoButton/EpaycoButton";

const PaymentSection: React.FC = () => {
  const { epayco, isScriptLoaded } = useEpaycoScript();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [checkoutCart, { loading }] = useCheckoutCartMutation();

  const handlePayClick = useCallback(async () => {
    if (!isScriptLoaded || !epayco?.open || loading) return;

    const { data } = await checkoutCart();
    const epaycoPayload = data?.checkoutCart?.epaycoData;
    if (!epaycoPayload) return;
    console.log(epaycoPayload);
    epayco.open(JSON.parse(epaycoPayload));
  }, [isScriptLoaded, epayco, loading, checkoutCart]);

  if (!isScriptLoaded) return null;

  const handleTermsCheckBoxCange = () => {
    setTermsAccepted((termsAccepted) => !termsAccepted);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <EpaycoButton
        disabled={!termsAccepted || loading}
        onClick={handlePayClick}
      />
      <Label check style={{ marginLeft: "20px" }}>
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
