import { Col, Row } from 'reactstrap';
import breakpoints from '../../../constants/breakpoints';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { TOP_STORES_allStores } from '../../../queries/__generated__/TOP_STORES';
import { StoreCard } from '../StoreCard';
import styles from './StoreList.module.css';

interface Props {
  stores: (TOP_STORES_allStores | null)[];
}

export default function StoreList({ stores }: Props): JSX.Element {
  const isMD = useMediaQuery(`(max-width: ${breakpoints.lg}px)`);

  const storeCards = stores.reduce<JSX.Element[]>((acc, curr) => {
    curr &&
      acc.push(
        <StoreCard store={curr} style={{ width: isMD ? '350px' : undefined }} />
      );
    return acc;
  }, []);

  if (isMD) {
    return (
      <div className={styles.scrollingWrapper}>
        {storeCards.map((storeCard, i) => (
          <div key={`store-${i}`} className={styles.card}>
            {storeCard}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Row>
        {storeCards.map((storeCard, i) => (
          <Col lg="4" key={`store-${i}`}>
            {storeCard}
          </Col>
        ))}
      </Row>
    );
  }
}
