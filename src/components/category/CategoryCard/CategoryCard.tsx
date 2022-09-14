import { useRouter } from 'next/router';
import { Card, CardBody, CardProps } from 'reactstrap';
import { TOP_CATEGORIES_allCategories } from '../../../queries/__generated__/TOP_CATEGORIES';
import { CategoryIcon } from '../CategoryIcon';
import styles from './CategoryCard.module.css';

interface Props extends Omit<CardProps, 'onClick'> {
  category: TOP_CATEGORIES_allCategories;
}

export default function CategoryCard({
  category,
  ...cardProps
}: Props): JSX.Element {
  const router = useRouter();

  const handeCardClick = () => {
    router.push({
      pathname: '/search',
      query: {
        key: encodeURIComponent(`Categoría ${category.name}`),
        category: category.id
      }
    });
  };

  return (
    <Card {...cardProps} onClick={handeCardClick}>
      <CardBody className={styles.cardBody}>
        <CategoryIcon category={category} />
      </CardBody>
    </Card>
  );
}
