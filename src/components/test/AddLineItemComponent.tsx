import { Form, Formik, FormikHelpers } from "formik";
import { useAddCartItemMutation } from "graphql/add-cart-item/add-cart-item.mutation";
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
  const addCartItemMutation = useAddCartItemMutation();

  if (!addCartItemMutation) return null;
  const [addCartItem] = addCartItemMutation;

  const handleSubmit = async (
    { productId, quantity }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log({ productId, quantity });
    await addCartItem({
      variables: {
        productId,
        quantity,
      },
    });
    resetForm();
  };

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Add Line Item</h3>
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
    </div>
  );
};

export default AddLineItemComponent;
