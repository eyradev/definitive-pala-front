import moment from 'moment';
import 'moment/locale/es';
import { Col, Row } from 'reactstrap';

interface Props {
  productionTime: number;
}

export default function ProductTimeEstimation({
  productionTime
}: Props): JSX.Element {
  return (
    <div className="blockquote blockquote-info">
      <Row>
        <Col xs={2}>
          <div
            style={{
              width: '100%',
              height: '100%',

              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '3rem',
              padding: '10px'
            }}
          >
            <i
              className="now-ui-icons tech_watch-time"
              style={{
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center'
              }}
            />
          </div>
        </Col>
        <Col xs={10}>
          <div style={{ margin: 0 }}>
            <h2
              style={{
                fontWeight: 'bold',
                fontSize: '2rem',
                margin: 0
              }}
            >
              {moment
                .duration(productionTime, 'minutes')
                .locale('es')
                .humanize()
                .toUpperCase()}
            </h2>
          </div>
          <h3 style={{ fontWeight: 'normal', fontSize: '1rem', margin: 0 }}>
            Tiempo de Producción Estimado
          </h3>
        </Col>
      </Row>
    </div>
  );
}
