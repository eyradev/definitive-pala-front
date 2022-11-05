import { Formik } from "formik";
import CreateUserAddressForm, {
  CreateUserAddressInput,
} from "../CreateUserAddressForm/CreateUserAddressForm";

const UserAddressCreationSection: React.FC = () => {
  const handleSubmit = async (values: CreateUserAddressInput) => {
    console.log(values);
  };
  return (
    <Formik<CreateUserAddressInput>
      initialValues={{
        addressL1: "",
        description: "",
        cityId: "",
        regionId: "",
      }}
      onSubmit={handleSubmit}
    >
      <CreateUserAddressForm />
    </Formik>
  );
};

export default UserAddressCreationSection;
