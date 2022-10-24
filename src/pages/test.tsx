import AddLineItemComponent from "components/test/AddLineItemComponent";
import CartAddressComponent from "components/test/CartAddressComponent";
import RemoveLineItemComponent from "components/test/RemoveLineItemComponent";
import TestComponent from "components/test/TestComponent";
import UpdateCartAddressComponent from "components/test/UpdateCartAddressComponent";
import GeneralProvider from "providers/GeneralProvider/GeneralProvider";

const TestPage = () => (
  <GeneralProvider>
    <TestComponent />
    <CartAddressComponent />
    <AddLineItemComponent />
    <RemoveLineItemComponent />
    <UpdateCartAddressComponent />
  </GeneralProvider>
);

export default TestPage;
