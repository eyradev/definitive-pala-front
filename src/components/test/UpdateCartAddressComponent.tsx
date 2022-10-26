import { Form, Formik, FormikHelpers } from "formik";
import { useCartAddressQuery } from "graphql/cart-address/cart-address.query";
import { useUpdateCartAddressMutation } from "graphql/update-cart-address/update-cart-address.mutation";
import * as yup from "yup";

interface UpdateCartAddressInput {
  addressId: string;
}

const UpdateCartAddressComponent: React.FC = () => {
  const { data } = useCartAddressQuery();

  let addressIdShape = yup.string().required().length(24).lowercase();
  if (data?.cart?.address?.id) {
    addressIdShape = addressIdShape.notOneOf([data.cart.address.id]);
  }
  const updateCartAddressInputValidationSchema: yup.SchemaOf<UpdateCartAddressInput> =
    yup.object().shape({
      addressId: addressIdShape,
    });

  // get update mutation
  const updateCartAddressMutation = useUpdateCartAddressMutation();
  if (!updateCartAddressMutation) return null;
  const [updateCartAddress] = updateCartAddressMutation;

  const handleSubmit = async (
    input: UpdateCartAddressInput,
    { resetForm }: FormikHelpers<UpdateCartAddressInput>
  ) => {
    const validatedInput =
      await updateCartAddressInputValidationSchema.validate(input);
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
