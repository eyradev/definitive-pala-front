import { useQuery } from '@apollo/client';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import { Section } from 'components/home';
import { StandardLayout } from 'components/layout';
import { Loading } from 'components/UI';
import useUserPP from 'hooks/useUserPP';
import { ALL_SELL_ORDERS } from 'queries/sell-order';
import {
  ALL_SELL_ORDERS as I_ALL_SELL_ORDERS,
  ALL_SELL_ORDERSVariables
} from 'queries/__generated__/ALL_SELL_ORDERS';
import { formatCurrency } from 'util/currency';

export default function History(): JSX.Element {
  const { user } = useUserPP();

  const { data, error, loading } = useQuery<
    I_ALL_SELL_ORDERS,
    ALL_SELL_ORDERSVariables
  >(ALL_SELL_ORDERS, {
    variables: { userId: user?.id || '' }
  });
  const sellOrders = data?.allSellOrders;

  if (loading) return <Loading />;
  if (error) return <h3>Lo sentimos, ocurrió un error</h3>;

  return (
    <div className="main">
      <Section title="Mi historial de compras">
        <Container>
          {!sellOrders || !sellOrders.length ? (
            <h4>No has comprado nada hasta el momento</h4>
          ) : (
            sellOrders?.map((so) => (
              <Row key={so?.id}>
                <Col>
                  <Card>
                    <CardBody>
                      <Container>
                        <Row>
                          <Col
                            md={6}
                            xs={12}
                            style={{
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <div>
                              <CardTitle tag="h5">
                                <strong>ID:</strong> {so?.id}
                              </CardTitle>
                              <CardSubtitle
                                tag="h6"
                                className="mb-2 text-muted"
                              >
                                {so?.state}
                              </CardSubtitle>
                            </div>
                          </Col>
                          <Col
                            md={6}
                            xs={12}
                            style={{
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <div>
                              {so?.shippingOrder?.address && (
                                <CardTitle tag="h5" className="mb-2">
                                  <strong>Dirección:</strong>
                                  {/* <br></br>
                                  {so?.shippingOrder?.address.id} */}
                                  <br></br>
                                  {so?.shippingOrder?.address.addressL1}
                                  <br></br>
                                  {so?.shippingOrder?.address.description}
                                </CardTitle>
                              )}
                              <CardSubtitle tag="h6" className="mb-2">
                                {formatCurrency(so?.shippingOrder?.price)}
                              </CardSubtitle>
                              {so?.shippingOrder?.state && (
                                <CardSubtitle
                                  tag="h6"
                                  className="mb-2 text-muted"
                                >
                                  {so?.shippingOrder?.state}
                                </CardSubtitle>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))
          )}
        </Container>
      </Section>
    </div>
  );
}

History.Layout = StandardLayout;
