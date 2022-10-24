import { Form, Formik, FormikHelpers } from "formik";
import { useUpdateCartAddressMutation } from "providers/GeneralProvider/graphql/update-cart-address";
import * as yup from "yup";

interface UpdateCartAddressInput {
  addressId: string;
}

const updateCartAddressInputValidationSchema: yup.SchemaOf<UpdateCartAddressInput> =
  yup.object().shape({
    addressId: yup.string().required().length(24).lowercase(),
  });

const UpdateCartAddressComponent: React.FC = () => {
  const [updateCartAddress] = useUpdateCartAddressMutation();

  if (!updateCartAddress) return null;

  const handleSubmit = async (
    input: UpdateCartAddressInput,
    { resetForm }: FormikHelpers<UpdateCartAddressInput>
  ) => {
    const validatedInput =
      await updateCartAddressInputValidationSchema.validate(input);
    console.log({ updateAddressInput: validatedInput });
    await updateCartAddress({ variables: validatedInput });
    resetForm();
  };

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Update Location</h3>
      <Formik<UpdateCartAddressInput>
        initialValues={{ addressId: "" }}
        onSubmit={handleSubmit}
        validationSchema={updateCartAddressInputValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <input
              type="text"
              name="addressId"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.addressId}
            />
            {errors.addressId && touched.addressId ? errors.addressId : null}
            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateCartAddressComponent;
