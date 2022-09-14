import { useMutation } from '@apollo/client';
import { Form, Formik, FormikHelpers } from 'formik';
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
  Spinner
} from 'reactstrap';
import useUserPP from '../../../hooks/useUserPP';
import { Coupon } from '../../../models/coupon';
import {
  CART_BY_USER,
  CART_TOTALS,
  USER_ADD_COUPON
} from '../../../queries/sell-order';
import {
  USER_ADD_COUPON_MUTATION,
  USER_ADD_COUPON_MUTATIONVariables
} from '../../../queries/__generated__/USER_ADD_COUPON_MUTATION';
import { couponSchema } from '../../../schemas/coupon';

export default function CouponForm(): JSX.Element {
  const { user } = useUserPP();

  const [addCoupon, { loading, error: submitError }] = useMutation<
    USER_ADD_COUPON_MUTATION,
    USER_ADD_COUPON_MUTATIONVariables
  >(USER_ADD_COUPON, {
    refetchQueries: [
      { query: CART_TOTALS },
      { query: CART_BY_USER, variables: { userId: user?.id || '' } }
    ]
  });

  const handleCouponSubmit = async (
    { code }: Coupon,
    { resetForm }: FormikHelpers<Coupon>
  ) => {
    if (loading) return;
    await addCoupon({ variables: { code } });
    resetForm();
  };

  return (
    <Formik<Coupon>
      initialValues={{ code: '' }}
      onSubmit={handleCouponSubmit}
      validationSchema={couponSchema}
    >
      {({ values, errors, handleChange, touched }) => (
        <Form>
          <Card>
            <CardBody>
              <div
                style={{
                  padding: 8,
                  paddingLeft: 16,
                  paddingRight: 16
                }}
              >
                <Row>
                  <Col xs={12} sm={6} lg={12}>
                    <CardTitle tag="h4">Cupón</CardTitle>
                    <CardText>Si tienes un cupon ingresalo aquí</CardText>
                  </Col>
                  <Col xs={12} sm={6} lg={12}>
                    <FormGroup
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        marginTop: '20px',
                        marginRight: '20px'
                      }}
                      className={
                        errors.code && touched.code ? 'has-danger' : undefined
                      }
                    >
                      <Input
                        type="text"
                        id="code"
                        name="code"
                        placeholder="Código del cupón"
                        value={values.code}
                        onChange={handleChange}
                        className={
                          errors.code && touched.code
                            ? 'form-control-danger'
                            : undefined
                        }
                      />
                      {((touched.code && errors.code) || submitError) && (
                        <FormText
                          className="text-muted"
                          color="danger"
                          id="regionErr"
                        >
                          {errors.code}
                          {submitError?.message}
                        </FormText>
                      )}
                      <Button
                        type="submit"
                        color="info"
                        style={{ maxWidth: '120px' }}
                        className="btn-raised btn-round"
                        disabled={loading}
                      >
                        Agregar {loading && <Spinner size="sm" />}
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Form>
      )}
    </Formik>
  );
}
