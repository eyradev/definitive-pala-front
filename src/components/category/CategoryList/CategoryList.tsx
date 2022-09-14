import { Col, Row } from 'reactstrap';
import breakpoints from '../../../constants/breakpoints';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { TOP_CATEGORIES_allCategories } from '../../../queries/__generated__/TOP_CATEGORIES';
import { CategoryCard } from '../CategoryCard';
import styles from './CategoryList.module.css';

interface Props {
  categories: (TOP_CATEGORIES_allCategories | null)[];
}

export default function CategoryList({ categories }: Props): JSX.Element {
  const isMD = useMediaQuery(`(max-width: ${breakpoints.lg}px)`);

  const categoryCards = categories.reduce<JSX.Element[]>((acc, curr) => {
    curr &&
      acc.push(
        <CategoryCard
          category={curr}
          style={{
            backgroundColor: curr.color || 'lightgray',
            height: '250px',
            width: '250px'
          }}
        />
      );
    return acc;
  }, []);

  if (isMD) {
    return (
      <div className={styles.scrollingWrapper}>
        {categoryCards.map((categoryCard, i) => (
          <div key={`prod-${i}`} className={styles.card}>
            {categoryCard}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <Row>
        {categoryCards.map((categoryCard, i) => (
          <Col lg="4" md="6" xl="3" key={`prod-${i}`}>
            {categoryCard}
          </Col>
        ))}
      </Row>
    );
  }
}
