import AddLineItemComponent from "components/test/AddLineItemComponent";
import RemoveLineItemComponent from "components/test/RemoveLineItemComponent";
import TestComponent from "components/test/TestComponent";
import GeneralProvider from "providers/GeneralProvider/GeneralProvider";

const TestPage = () => (
  <GeneralProvider>
    <TestComponent />
    <AddLineItemComponent />
    <RemoveLineItemComponent />
  </GeneralProvider>
);

export default TestPage;
