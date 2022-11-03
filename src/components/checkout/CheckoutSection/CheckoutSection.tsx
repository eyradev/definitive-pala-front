import CartItemSection from "components/cart/CartItemsSection/CartItemsSection";
import CartTotalsSection from "components/cart/CartTotalsSection/CartTotalsSection";
import { Section } from "components/home";
import withCartAdjustment from "providers/CheckoutProvider/withCartAdjustment";
import { Col, Row } from "reactstrap";
import EpaycoButton from "../EpaycoButton/EpaycoButton";

const CheckoutSection: React.FC = () => {
  return (
    <div className="main">
      <Section title="Checkout">
        <Row>
          <Col md={6}>
            <CartItemSection />
          </Col>
          <Col>
            <EpaycoButton disabled />
          </Col>
        </Row>
        <Row>
          <CartTotalsSection />
        </Row>
      </Section>
    </div>
  );
};

export default withCartAdjustment(CheckoutSection);
