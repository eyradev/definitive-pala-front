import { Form, Formik, FormikHelpers } from "formik";
import { useCartPriceQuery } from "graphql/cart-price/cart-price.query";
import useCheckout from "providers/CheckoutProvider/useCheckout";
import { FC } from "react";
import { formatCurrency } from "util/currency";
import * as yup from "yup";

interface AddCouponInput {
  couponCode: string;
}

const addCouponInputValidationSchema: yup.SchemaOf<AddCouponInput> = yup
  .object()
  .shape({
    couponCode: yup.string().required().lowercase(),
  });

const CouponsComponent: FC = () => {
  const { palanteCoupon, storeCoupon, addCoupon } = useCheckout();

  const cartPriceQuery = useCartPriceQuery({
    variables: {
      palanteCouponId: palanteCoupon?.id,
      storeCouponId: storeCoupon?.id,
    },
  });

  // the function must be set
  if (!addCoupon || !cartPriceQuery) return null;

  const { data, error, loading } = cartPriceQuery;

  if (error || !data?.CartPrice) return null;

  const {
    basePrice,
    palanteDiscount,
    palanteTotal,
    storeDiscount,
    storeTotal,
    tax,
    total,
  } = data.CartPrice;

  const handleSubmit = async (
    input: AddCouponInput,
    { resetForm }: FormikHelpers<AddCouponInput>
  ) => {
    const { couponCode } = await addCouponInputValidationSchema.validate(input);
    await addCoupon(couponCode);
    resetForm();
  };

  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>Coupons</h3>
      {storeCoupon ? (
        <div>
          <strong>Store Coupon</strong>: {storeCoupon.name} -{" "}
          {storeCoupon.shortName} - {storeCoupon.id}
        </div>
      ) : null}
      {palanteCoupon ? (
        <div>
          <strong>Palante Coupon</strong>: {palanteCoupon.name} -{" "}
          {palanteCoupon.shortName} - {palanteCoupon.id}
        </div>
      ) : null}
      <Formik<AddCouponInput>
        initialValues={{ couponCode: "" }}
        onSubmit={handleSubmit}
        validationSchema={addCouponInputValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <input
              type="text"
              name="couponCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.couponCode}
            />
            {errors.couponCode && touched.couponCode ? errors.couponCode : null}
            <button type="submit" disabled={isSubmitting}>
              Add Coupon
            </button>
          </Form>
        )}
      </Formik>
      <h3>Cart to Submit</h3>
      <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
        <h3>Cart Price</h3>
        <div>
          <strong>basePrice</strong>: {formatCurrency(basePrice)}
        </div>
        <div>
          <strong>storeDiscount</strong>: {formatCurrency(storeDiscount)}
        </div>
        <div>
          <strong>palanteDiscount</strong>: {formatCurrency(palanteDiscount)}
        </div>
        <div>
          <strong>totalToPay</strong>: {formatCurrency(total)}
        </div>
        <div>
          <strong>storeTotal </strong>: {formatCurrency(storeTotal)}
        </div>
        <div>
          <strong>palanteTotal</strong>: {formatCurrency(palanteTotal)}
        </div>
        <div>
          <strong>serviceTax</strong>: {formatCurrency(tax)}
        </div>
      </div>
    </div>
  );
};

export default CouponsComponent;
