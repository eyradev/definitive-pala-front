import UserAddressCreator from "components/address/UserAddressCreator/UserAddressCreator";
import UserAddressesSection from "components/address/UserAddressesSection/UserAddressesSection";
import UserAddressSelector from "components/address/UserAddressSelectorSection/UserAddressSelectorSection";
import CartItemSection from "components/cart/CartItemsSection/CartItemsSection";
import { Section } from "components/home";
import CheckoutProvider from "providers/CheckoutProvider/CheckoutProvider";
import withCartAdjustment from "providers/CheckoutProvider/withCartAdjustment";
import { Card, CardBody, Col, Row } from "reactstrap";
import CartPriceSection from "../CartPriceSection/CartPriceSection";
import { CouponForm } from "../CouponForm";
import { CouponList } from "../CouponList";
import PaymentSection from "../PaymentSection/PaymentSection";

const CheckoutSection: React.FC = () => {
  return (
    <CheckoutProvider>
      <div className="main">
        <Section title="Checkout">
          <Row>
            <Col md={6}>
              <CartItemSection />
            </Col>
            <Col>
              <UserAddressesSection />
              <UserAddressSelector>seleccionar dirección</UserAddressSelector>
              <UserAddressCreator>crear dirección</UserAddressCreator>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <CouponForm />
            </Col>
            <Col md={6}>
              <CouponList />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div>
                    <CartPriceSection />
                  </div>
                  <div>
                    <PaymentSection />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Section>
      </div>
    </CheckoutProvider>
  );
};

export default withCartAdjustment(CheckoutSection);
