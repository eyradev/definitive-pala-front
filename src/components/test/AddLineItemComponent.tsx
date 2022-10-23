import { Form, Formik, FormikHelpers } from "formik";
import { useAddCartItemMutation } from "providers/GeneralProvider/graphql/add-to-cart.query";
import * as yup from "yup";
interface FormValues {
  productId: string;
  quantity: number;
}

const formValidationSchema: yup.SchemaOf<FormValues> = yup.object().shape({
  productId: yup.string().required(),
  quantity: yup.number().integer().required(),
});

const AddLineItemComponent = () => {
  const [addCartItem] = useAddCartItemMutation();

  if (!addCartItem) return null;

  const handleSubmit = async (
    { productId, quantity }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log({ productId, quantity });
    const { data } = await addCartItem({
      variables: {
        productId,
        quantity,
      },
    });
    resetForm();
  };

  return (
    <Formik<FormValues>
      initialValues={{
        productId: "",
        quantity: 1,
      }}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchema}
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
            name="productId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productId}
          />
          {errors.productId && touched.productId ? errors.productId : null}

          <input
            type="number"
            name="quantity"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
          />
          {errors.quantity && touched.quantity ? errors.quantity : null}

          <button type="submit" disabled={isSubmitting}>
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddLineItemComponent;
