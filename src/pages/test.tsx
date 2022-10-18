import TestComponent from "components/test/TestComponent";
import GeneralProvider from "providers/GeneralProvider/GeneralProvider";

const TestPage = () => (
  <GeneralProvider>
    <TestComponent />
  </GeneralProvider>
);

export default TestPage;
