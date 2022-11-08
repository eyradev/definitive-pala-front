import { tcUrl } from "config";
import { useCheckoutCartMutation } from "graphql/checkout-cart/checkout-cart.mutation";
import useEpaycoScript from "hooks/useEpaycoScript";
import Link from "next/link";
import useCheckout from "providers/CheckoutProvider/useCheckout";
import { useCallback, useState } from "react";
import { Input, Label } from "reactstrap";
import EpaycoButton from "../EpaycoButton/EpaycoButton";

const PaymentSection: React.FC = () => {
  const { epayco, isScriptLoaded } = useEpaycoScript();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { checkoutMutation, hasAddress, hasAmount } = useCheckoutCartMutation();

  const [checkoutCart, { loading }] = checkoutMutation;

  const handlePayClick = useCallback(async () => {
    if (!isScriptLoaded || !epayco?.open || loading) return;
    const { data } = await checkoutCart();
    const epaycoPayload = data?.checkoutCart?.epaycoData;
    if (!epaycoPayload) return;
    epayco.open(JSON.parse(epaycoPayload));
  }, [isScriptLoaded, epayco, loading, checkoutCart]);

  if (!isScriptLoaded) return null;

  const handleTermsCheckBoxCange = () => {
    setTermsAccepted((termsAccepted) => !termsAccepted);
  };

  let errorMessage = undefined;

  if (!termsAccepted) {
    errorMessage = "Debes aceptar los terminos y condiciones";
  } else if (!hasAddress) {
    errorMessage = "Debes seleccionar una dirección de envío";
  } else if (!hasAmount) {
    errorMessage = "No llevas suficientes productos";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <EpaycoButton
        disabled={!!errorMessage || loading}
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
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};

export default PaymentSection;
