import AddLineItemComponent from "components/test/AddLineItemComponent";
import AdjustCartComponent from "components/test/AdjustCartComponent";
import CartAddressComponent from "components/test/CartAddressComponent";
import CartPriceComponent from "components/test/CartPriceComponent";
import CartStoreComponent from "components/test/CartStoreComponent";
import RemoveLineItemComponent from "components/test/RemoveLineItemComponent";
import ShippingPriceComponent from "components/test/ShippingPriceComponent";
import TestComponent from "components/test/TestComponent";
import UpdateCartAddressComponent from "components/test/UpdateCartAddressComponent";

const TestPage = () => (
  <>
    <TestComponent />
    <CartAddressComponent />
    <CartStoreComponent />
    <AddLineItemComponent />
    <RemoveLineItemComponent />
    <UpdateCartAddressComponent />
    <CartPriceComponent />
    <ShippingPriceComponent />
    <AdjustCartComponent />
  </>
);

export default TestPage;
