import { Formik } from "formik";
import CreateUserAddressForm, {
  CreateUserAddressInput,
} from "../CreateUserAddressForm/CreateUserAddressForm";
import * as yup from "yup";
import { useCreateUserAddressMutation } from "graphql/create-user-addres/create-user-address.mutation";

const createUserAddressInputValidationSchema: yup.SchemaOf<CreateUserAddressInput> =
  yup.object().shape({
    regionId: yup
      .string()
      .required("se debe seleccionar una región")
      .length(24, "el identificador de la región debe tener 24 caracteres"),
    cityId: yup
      .string()
      .required("se debe seleccionar una ciudad")
      .length(24, "el identificador de la ciudad debe tener 24 caracteres"),
    addressL1: yup
      .string()
      .required("se debe indicar una dirección")
      .min(5, "la dirección debe tener más de 5 caracteres")
      .max(200, "la dirección debe tener máximo 200 caracteres")
      .trim(),
    description: yup
      .string()
      .required("se requiere información adicional sobre la dirección")
      .min(5, "la información adicional debe tener más de 5 caracteres")
      .max(300, "la información adicional debe tener menos de 300 caracteres")
      .trim(),
  });

const UserAddressCreationSection: React.FC<{
  onAddressCreated?: () => void | Promise<void>;
}> = ({ onAddressCreated }) => {
  const createUserAddressMutation = useCreateUserAddressMutation();

  if (!createUserAddressMutation) return null;
  const [createUserAddress] = createUserAddressMutation;

  const handleSubmit = async (values: CreateUserAddressInput) => {
    const validatedInput =
      await createUserAddressInputValidationSchema.validate(values);
    await createUserAddress({
      variables: {
        addressL1: validatedInput.addressL1,
        description: validatedInput.description,
        cityId: validatedInput.cityId,
      },
    });
    if (onAddressCreated) await onAddressCreated();
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
      validationSchema={createUserAddressInputValidationSchema}
    >
      <CreateUserAddressForm />
    </Formik>
  );
};

export default UserAddressCreationSection;
