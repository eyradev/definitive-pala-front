import AddLineItemComponent from "components/test/AddLineItemComponent";
import AdjustCartComponent from "components/test/AdjustCartComponent";
import CartAddressComponent from "components/test/CartAddressComponent";
import CartStoreComponent from "components/test/CartStoreComponent";
import RemoveLineItemComponent from "components/test/RemoveLineItemComponent";
import TestComponent from "components/test/TestComponent";
import UpdateCartAddressComponent from "components/test/UpdateCartAddressComponent";
import GeneralProvider from "providers/GeneralProvider/GeneralProvider";

const TestPage = () => (
  <GeneralProvider>
    <TestComponent />
    <CartAddressComponent />
    <CartStoreComponent />
    <AddLineItemComponent />
    <RemoveLineItemComponent />
    <UpdateCartAddressComponent />
    <AdjustCartComponent />
  </GeneralProvider>
);

export default TestPage;
