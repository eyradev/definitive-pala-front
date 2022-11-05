import UserAddressesSection from "components/address/UserAddressesSection/UserAddressesSection";
import UserAddressSelector from "components/address/UserAddressSelectorSection/UserAddressSelectorSection";
import CartItemSection from "components/cart/CartItemsSection/CartItemsSection";
import CartTotalsSection from "components/cart/CartTotalsSection/CartTotalsSection";
import { Section } from "components/home";
import CheckoutProvider from "providers/CheckoutProvider/CheckoutProvider";
import withCartAdjustment from "providers/CheckoutProvider/withCartAdjustment";
import { Col, Row } from "reactstrap";
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
              <UserAddressSelector>seleccionar direccion</UserAddressSelector>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <CartTotalsSection />
              <PaymentSection />
            </Col>
          </Row>
        </Section>
      </div>
    </CheckoutProvider>
  );
};

export default withCartAdjustment(CheckoutSection);
