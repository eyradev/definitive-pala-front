import { useMutation } from "@apollo/client";
import { Form, Formik, FormikHelpers } from "formik";
import useCheckout from "providers/CheckoutProvider/useCheckout";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  FormText,
  Input,
  Row,
  Spinner,
} from "reactstrap";
import * as yup from "yup";

interface AddCouponInput {
  code: string;
}

const addCouponInputValidationSchema: yup.SchemaOf<AddCouponInput> = yup
  .object()
  .shape({
    code: yup.string().required().min(3).max(20),
  });

const CouponForm: React.FC = () => {
  const { addCoupon } = useCheckout();

  if (!addCoupon) return null;

  const handleSubmit = async (
    input: AddCouponInput,
    { resetForm }: FormikHelpers<AddCouponInput>
  ) => {
    const { code } = await addCouponInputValidationSchema.validate(input);
    await addCoupon(code);
    resetForm();
  };
  return (
    <Formik<AddCouponInput>
      initialValues={{ code: "" }}
      onSubmit={handleSubmit}
      validationSchema={addCouponInputValidationSchema}
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
          {/* <Card>
            <CardBody> */}
          <div
            style={{
              padding: 8,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <Row>
              <Col xs={12} sm={6} lg={12}>
                <CardTitle tag="h4">Cupones</CardTitle>
                <CardText>Si tienes un código de cupon ingresalo aquí</CardText>
              </Col>
              <Col xs={12} sm={6} lg={12}>
                <FormGroup
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    marginTop: "20px",
                    marginRight: "20px",
                  }}
                  className={
                    errors.code && touched.code ? "has-danger" : undefined
                  }
                >
                  <Input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Código del cupón"
                    value={values.code}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.code && touched.code
                        ? "form-control-danger"
                        : undefined
                    }
                  />
                  {touched.code && errors.code ? (
                    <FormText
                      className="text-muted"
                      color="danger"
                      id="regionErr"
                    >
                      {errors.code}
                    </FormText>
                  ) : null}
                  <Button
                    type="submit"
                    color="info"
                    style={{ maxWidth: "120px" }}
                    className="btn-raised btn-round"
                    disabled={isSubmitting}
                  >
                    Agregar {isSubmitting && <Spinner size="sm" />}
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </div>
          {/* </CardBody>
          </Card> */}
        </Form>
      )}
    </Formik>
  );
};

export default CouponForm;
