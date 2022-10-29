import AddLineItemComponent from "components/test/AddLineItemComponent";
import AdjustCartComponent from "components/test/AdjustCartComponent";
import CartAddressComponent from "components/test/CartAddressComponent";
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
    <ShippingPriceComponent />
    <AdjustCartComponent />
  </>
);

export default TestPage;
