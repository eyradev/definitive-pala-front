import AddLineItemComponent from "components/test/AddLineItemComponent";
import TestComponent from "components/test/TestComponent";
import GeneralProvider from "providers/GeneralProvider/GeneralProvider";

const TestPage = () => (
  <GeneralProvider>
    <TestComponent />
    <AddLineItemComponent />
  </GeneralProvider>
);

export default TestPage;
