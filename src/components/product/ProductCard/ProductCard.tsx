import Link from 'next/link';
import {
  Card,
  CardBody,
  CardProps,
  CardSubtitle,
  CardTitle,
  Col,
  Row
} from 'reactstrap';
import useUserPP from '../../../hooks/useUserPP';
import { landScapeImages } from '../../../mock/images';
import { PRODUCT_SEARCH_allProducts } from '../../../queries/__generated__/PRODUCT_SEARCH';
import { CategoryIcon } from '../../category';
import { Star } from '../../UI';
import styles from './ProductCard.module.css';

const maxCategoryLength = 3;

interface Props extends CardProps {
  product: PRODUCT_SEARCH_allProducts;
}

export default function ProductCard({
  product,
  ...cardProps
}: Props): JSX.Element {
  const { user } = useUserPP();
  const photo = product.photo[0];
  const discount =
    product.salePrice && product.price
      ? Math.round(((product.price - product.salePrice) * 100) / product.price)
      : undefined;
  return (
    <Card className={`${styles.productCard}`} {...cardProps}>
      <div className={`${styles['card-image']} card-image`}>
        <Link href={`/products/${product.id}`}>
          <a>
            <img
              alt={photo.altText || '...'}
              src={photo.image?.publicUrlTransformed || landScapeImages[0]}
              className={styles.cardImage}
            />
          </a>
        </Link>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0
        }}
      >
        {discount && (
          <Star style={{ height: '50px', width: '50px' }}>{discount}% Off</Star>
        )}
      </div>
      <CardBody style={{ whiteSpace: 'pre' }}>
        <Link href={`/products/${product.id}`}>
          <a>
            <CardTitle tag="h4" className={styles.title}>
              {product.name}
            </CardTitle>
          </a>
        </Link>
        {product.store && product.store.name && (
          <Link
            href={`/search?key=${encodeURIComponent(
              'Tienda ' + product.store?.name
            )}&store=${product.store?.id}`}
          >
            <a>
              <CardSubtitle tag="p" className={styles.cardSubtitle}>
                {product.store?.name}
              </CardSubtitle>
            </a>
          </Link>
        )}
        {product.description && (
          <p className={`card-description ${styles.description}`}>
            {product.description?.length > 40
              ? `${product.description.substring(0, 39)}...`
              : product.description}
          </p>
        )}

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className="price">
              ${discount ? product.salePrice : product.price}
            </span>
          </div>
          <Row>
            {product.category.slice(0, maxCategoryLength).map((category) => (
              <Col
                key={category.id}
                id={`prod-cat-${category.id}`}
                className={styles.category}
                style={{
                  backgroundColor: user?.category.find(
                    (c) => c.id === category.id
                  )
                    ? 'var(--success)'
                    : undefined
                }}
              >
                <CategoryIcon category={category} />
              </Col>
            ))}
          </Row>
        </div>
      </CardBody>
    </Card>
  );
}
