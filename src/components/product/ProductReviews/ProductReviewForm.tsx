import BeautyStars from 'beauty-stars';
import { Form, useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import {
  Button,
  Col,
  FormGroup,
  FormText,
  Input,
  Media,
  Row
} from 'reactstrap';
import useUserPP from '../../../hooks/useUserPP';
import { ProductReview } from '../../../models/product';

export default function ProductReviewForm(): JSX.Element {
  const { handleChange, touched, errors, values, setFieldValue } =
    useFormikContext<ProductReview>();
  const { user } = useUserPP();
  const router = useRouter();

  return (
    <Form>
      <Media className="media-post">
        <a className="pull-left author" />
        <Media body>
          <FormGroup
            className={
              (touched.comment && errors.comment && 'has-danger') || undefined
            }
          >
            <Input
              id="comment"
              name="comment"
              value={values.comment}
              onChange={handleChange}
              placeholder="¿Qué te parecio el producto?..."
              rows="4"
              type="textarea"
              disabled={!user}
              className={
                (touched.comment && errors.comment && 'form-control-danger') ||
                undefined
              }
            />
          </FormGroup>
          {touched.comment && errors.comment && (
            <FormText className="text-muted" color="danger" id="commentHelp">
              {errors.comment}
            </FormText>
          )}
          <div className="media-footer">
            <Row>
              <Col xs={12} sm={8}>
                <FormGroup>
                  <BeautyStars
                    editable={!!user}
                    value={values.score}
                    onChange={(value) => {
                      setFieldValue('score', value);
                    }}
                    activeColor="#fd7e14"
                  />
                  {touched.score && errors.score && (
                    <FormText style={{ fontSize: '0.8rem' }} color="danger">
                      {errors.score}
                    </FormText>
                  )}
                </FormGroup>
              </Col>
              <Col xs={12} sm={4}>
                <Button
                  className="pull-right"
                  color="info"
                  type={user ? 'submit' : 'button'}
                  onClick={
                    user
                      ? undefined
                      : () => {
                          router.push('/signup');
                        }
                  }
                >
                  <i className="now-ui-icons ui-1_send" />{' '}
                  {user ? 'Enviar' : 'Registrate'}
                </Button>
              </Col>
            </Row>
          </div>
        </Media>
      </Media>
    </Form>
  );
}
