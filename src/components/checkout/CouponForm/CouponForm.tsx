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
          <Card>
            <CardBody>
              <div>
                <Row>
                  <Col xs={12}>
                    <CardTitle tag="h4" style={{ marginTop: 5 }}>
                      Agregar Cupón
                    </CardTitle>
                    <CardText>
                      Si tienes un código de cupon ingresalo aquí
                    </CardText>
                  </Col>
                  <Col>
                    <FormGroup
                      style={{
                        display: "inline-block",
                        marginTop: 5,
                        marginRight: 10,
                        width: "55%",
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
                    </FormGroup>
                    <Button
                      type="submit"
                      color="info"
                      style={{
                        maxWidth: "120px",
                        display: "inline-block",
                        margin: 0,
                        padding: "7px 15px",
                      }}
                      className="btn-raised btn-round"
                      disabled={isSubmitting}
                    >
                      Agregar {isSubmitting && <Spinner size="sm" />}
                    </Button>
                    {touched.code && errors.code ? (
                      <p
                        style={{
                          color: "var(--danger)",
                          marginLeft: "10px",
                          fontWeight: "normal",
                        }}
                      >
                        {errors.code}
                      </p>
                    ) : null}
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default CouponForm;
