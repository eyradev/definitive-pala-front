import { Form, Formik, FormikHelpers } from "formik";
import { useRemoveFromCartMutation } from "providers/GeneralProvider/graphql/remove-from-cart.query";
import { FC } from "react";
import * as yup from "yup";

interface RemoveLineItemInput {
  lineItemId: string;
  quantity?: number;
}

const removeLineItemInputValidationSchema: yup.SchemaOf<RemoveLineItemInput> =
  yup.object().shape({
    lineItemId: yup.string().required().length(24).lowercase(),
    quantity: yup.number().transform((val) => (!val ? undefined : val)),
  });

const RemoveLineItemComponent: FC = () => {
  const [removeLineItem] = useRemoveFromCartMutation();

  if (!removeLineItem) return null;

  const handleSubmit = async (
    input: RemoveLineItemInput,
    { resetForm }: FormikHelpers<RemoveLineItemInput>
  ) => {
    const validatedInput = await removeLineItemInputValidationSchema.validate(
      input
    );
    console.log({ removeLineItemInput: validatedInput });
    await removeLineItem({ variables: validatedInput });
    resetForm();
  };

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Remove Line Item</h3>
      <Formik<RemoveLineItemInput>
        initialValues={{ lineItemId: "", quantity: "" as any }}
        onSubmit={handleSubmit}
        validationSchema={removeLineItemInputValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => {
          return (
            <Form>
              <input
                type="text"
                name="lineItemId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lineItemId}
              />
              {errors.lineItemId && touched.lineItemId
                ? errors.lineItemId
                : null}
              <input
                type="number"
                name="quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                size={12}
              />
              {errors.quantity && touched.quantity ? errors.quantity : null}
              <button type="submit" disabled={isSubmitting}>
                submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RemoveLineItemComponent;
