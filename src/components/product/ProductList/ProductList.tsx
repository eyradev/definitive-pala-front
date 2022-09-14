import { Col, Row } from 'reactstrap';
import breakpoints from '../../../constants/breakpoints';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { PRODUCT_SEARCH_allProducts } from '../../../queries/__generated__/PRODUCT_SEARCH';
import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.css';

interface Props {
  xScrollable?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  products: (PRODUCT_SEARCH_allProducts | null)[];
}

export default function ProductList({
  products,
  xScrollable = true,
  xs = 12,
  sm = 12,
  md = 6,
  lg = 4,
  xl = 3
}: Props): JSX.Element {
  const isMD = useMediaQuery(`(max-width: ${breakpoints.lg}px)`);

  const productCards = products
    .filter((product) => product !== null)
    .map((product) =>
      product ? (
        <ProductCard
          product={product}
          style={{
            height: '300px',
            maxWidth: '340px',
            minWidth: isMD ? '250px' : undefined
          }}
        />
      ) : null
    );

  if (xScrollable && isMD) {
    return (
      <div className={styles.scrollingWrapper}>
        {productCards.map((productCard, i) => (
          <div key={`prod-${i}`} className={styles.card}>
            {productCard}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Row>
        {productCards.map((productCard, i) => (
          <Col
            key={`prod-${i}`}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {productCard}
          </Col>
        ))}
      </Row>
    );
  }
}
