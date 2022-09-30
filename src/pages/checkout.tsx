import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { CartItem } from "components/cart/CartItem";
import { CouponForm, CouponList, LocationForm } from "components/checkout";
import { Section } from "components/home";
import { StandardLayout } from "components/layout";
import {
  epaycoConfirmationURL,
  epaycoID,
  epaycoKey,
  epaycoResponseURL,
  epaycoTestMode,
  tcUrl,
} from "config";
import useAddress from "hooks/useAddress";
import useCart from "hooks/useCart";
import useEpayco from "hooks/useEpayco";
import useNotification from "hooks/useNotification";
import useUserPP from "hooks/useUserPP";
import { ALL_LINE_ITEMS_BY_USER } from "queries/lineItem";
import {
  CART_BY_USER,
  CART_TOTALS,
  UPDATE_CART_STOCK,
} from "queries/sell-order";
import { CART_STORE_QUERY } from "queries/store";
import { CART_STORE } from "queries/__generated__/CART_STORE";
import { UPDATE_CART_STOCK_MUTATION } from "queries/__generated__/UPDATE_CART_STOCK_MUTATION";
import { formatCurrency } from "util/currency";
import Image from "next/image";
import epaycoLogo from "public/images/epayco.png";

export default function CheckoutPage(): JSX.Element {
  const { lineItems, cartData, cartTotals } = useCart();
  const router = useRouter();
  const { user } = useUserPP();
  const { addNotification } = useNotification();
  const { selectedAddress } = useAddress();

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [updateCartStock] = useMutation<UPDATE_CART_STOCK_MUTATION>(
    UPDATE_CART_STOCK,
    {
      refetchQueries: [
        {
          query: ALL_LINE_ITEMS_BY_USER,
          variables: { userId: user?.id || "" },
        },
        {
          query: CART_BY_USER,
          variables: { userId: user?.id || "" },
        },
        { query: CART_TOTALS },
      ],
    }
  );

  const { epayco } = useEpayco({
    key: epaycoKey,
    test: epaycoTestMode,
  });

  const handleCartUpdate = useCallback(async () => {
    const { data } = await updateCartStock();
    if (data?.updateCartStock?.actions) {
      if (data.updateCartStock.actions.length === 0) return;
      addNotification({
        message: data.updateCartStock.actions.join("\n"),
        type: "info",
      });
    }
  }, []);

  const { data: cartStore } = useQuery<CART_STORE>(CART_STORE_QUERY);

  // update cart totals when checkout page is reached
  useEffect(() => {
    // check if the cart is empty and redirect to home page if it is
    if (!lineItems?.allLineItems || !lineItems.allLineItems.length) {
      router.push("/");
    } else {
      handleCartUpdate();
    }
  }, [lineItems?.allLineItems]);

  const productTotal = cartTotals?.total;
  const deliveryTotal = cartData?.shippingOrder?.price;
  const storePaysShipment = cartTotals?.storePaysShipment;

  let total = productTotal || 0;
  if (!storePaysShipment) {
    total += deliveryTotal || 0;
  }

  const handlePay = useCallback(async () => {
    const storeEpaycoId = cartStore?.cartStore?.epaycoId;
    if (
      !cartTotals?.total ||
      !user ||
      !lineItems?.allLineItems ||
      !lineItems.allLineItems.length ||
      !selectedAddress ||
      !storeEpaycoId
    )
      return;

    await handleCartUpdate();

    const data = {
      //Parametros compra (obligatorio)
      name: cartData?.id || "",
      description: "carrito de " + user.name,
      invoice: cartData?.id + moment().format("YYYYMMDDHHmm"),
      currency: "cop",
      amount: 5000,
      country: "co",
      lang: "es",

      // Split data
      split_app_id: epaycoID, // id principal, sera el comercio
      split_merchant_id: epaycoID, // id de a quien quedara a nombre la transaccion -> comercio
      split_type: "01",
      split_primary_receiver: epaycoID, // id de la cuenta principal, de nuevo?
      split_primary_receiver_fee: "0", // debe ir en 0
      splitpayment: "true", // activa la funcionalidad de split payment
      split_rule: "multiple", // se debe enviar multiple
      split_receivers: [
        // cobrar comision para epayco y domicilio
        {
          id: storeEpaycoId,
          total: `${total}`,
          iva: "",
          base_iva: "",
          fee: `${
            cartTotals?.feeTotal && deliveryTotal
              ? cartTotals.feeTotal + deliveryTotal
              : undefined
          }`,
        },
      ],

      //Onpage="false" - Standard="true"
      external: "false",

      //Atributos opcionales
      extra1: "a",
      extra2: "a",
      extra3: "a",
      confirmation: epaycoConfirmationURL,
      response: epaycoResponseURL,

      //Atributos cliente
      name_billing: user.name,
      address_billing: selectedAddress.addressL1,
      type_doc_billing: "cc",
      mobilephone_billing: user.phone,
      number_doc_billing: user.identification,

      //atributo deshabilitación metodo de pago
      methodsDisable: ["CASH"],
    };

    if (epayco) epayco.open(data);
  }, [cartTotals, lineItems, cartStore, selectedAddress]);

  return (
    <>
      <div className="main">
        <Section title="Checkout">
          <Row>
            <Col md={6}>
              {lineItems?.allLineItems?.map((lineItem) => {
                if (lineItem) {
                  return (
                    <div key={lineItem.id}>
                      <CartItem lineItem={lineItem} />
                    </div>
                  );
                }
              })}
            </Col>
            <Col md={6}>
              <LocationForm />
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <CouponForm />
            </Col>
            <Col xs={12} lg={8}>
              <Card>
                <CardBody>
                  <div
                    style={{
                      padding: 8,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }}
                  >
                    <CardTitle tag="h4">Información Pago</CardTitle>
                    <div className="mt-2">
                      <Row>
                        <Col xs={12} md={6}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 4,
                              alignItems: "flex-start",
                            }}
                          >
                            <CardSubtitle tag="h5" className="mb-2">
                              Precio Base: {formatCurrency(cartTotals?.total)}
                            </CardSubtitle>
                            <CardSubtitle tag="h5" className="mb-2">
                              {typeof deliveryTotal === "number" && (
                                <>
                                  {storePaysShipment ? (
                                    <>Envio Incluido</>
                                  ) : (
                                    <>
                                      Envio:{" "}
                                      {formatCurrency(
                                        cartData?.shippingOrder?.price
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </CardSubtitle>
                            {cartData?.coupons &&
                              cartData.coupons.length > 0 && (
                                <CouponList coupons={cartData.coupons} />
                              )}
                            <CardSubtitle
                              tag="h3"
                              className="mb-2"
                              style={{ fontWeight: "bold" }}
                            >
                              Total {formatCurrency(total)}
                            </CardSubtitle>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 4,
                              alignItems: "center",
                            }}
                          >
                            <div
                              id="epayco-logo-container"
                              style={{
                                width: "60%",
                                height: "100%",
                                position: "relative",
                              }}
                            >
                              <Image
                                src={epaycoLogo}
                                alt="epayco logo"
                                width={400}
                                height={132}
                                layout="responsive"
                                objectFit="contain"
                                sizes="100vw"
                              />
                            </div>

                            <Button
                              className={`btn-raised btn-round`}
                              style={{ width: 200 }}
                              color="primary"
                              type="submit"
                              disabled={
                                !acceptTerms || !cartTotals?.canCheckout
                              }
                              onClick={handlePay}
                            >
                              Pagar
                            </Button>
                            {!cartTotals?.canCheckout && (
                              <FormText
                                className="text-muted"
                                color="danger"
                                tag="div"
                              >
                                Se debe comprar un monto minimo de{" "}
                                {formatCurrency(15000)} para hacer checkout
                              </FormText>
                            )}
                            <Label check>
                              <Input
                                checked={acceptTerms}
                                onChange={() => setAcceptTerms((prev) => !prev)}
                                type="checkbox"
                              />
                              <span className="form-check-sign"></span>
                              <Link href={tcUrl || "#"}>
                                Acepto términos y condiciones
                              </Link>
                            </Label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Section>
      </div>
    </>
  );
}

CheckoutPage.Layout = StandardLayout;
