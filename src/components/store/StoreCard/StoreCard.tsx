import Link from 'next/link';
import {
  Card,
  CardBody,
  CardFooter,
  CardProps,
  CardSubtitle,
  CardTitle
} from 'reactstrap';
import { landScapeImages, storeImages } from '../../../mock/images';
import { TOP_STORES_allStores } from '../../../queries/__generated__/TOP_STORES';
import styles from './StoreCard.module.css';

interface Props extends CardProps {
  store: TOP_STORES_allStores;
}

export default function StoreCard({ store, ...cardProps }: Props): JSX.Element {
  const storeURI = `/search?key=${encodeURIComponent(
    'Tienda ' + store.name
  )}&store=${store.id}`;

  return (
    <Card className={styles.storeCard} {...cardProps}>
      <div className={styles.cardImage}>
        <img
          alt={`${store.name} banner`}
          src={store.banner?.publicUrlTransformed || landScapeImages[3]}
        />
      </div>
      <div className={styles.storeLogo}>
        <Link href={storeURI}>
          <a>
            <img
              alt={`${store.name} logo`}
              src={store.logo?.publicUrlTransformed || storeImages[0]}
            />
          </a>
        </Link>
      </div>
      <CardBody>
        <Link href={storeURI}>
          <a>
            <CardTitle tag="h4" className={styles.cardText}>
              {store.name}
            </CardTitle>
          </a>
        </Link>
        {store.description && store.description.length > 0 && (
          <Link href={storeURI}>
            <a>
              <CardSubtitle tag="p" className={styles.cardText}>
                {store.description.length > 40
                  ? `${store.description.substring(0, 39)}...`
                  : store.description}
              </CardSubtitle>
            </a>
          </Link>
        )}
      </CardBody>
      <CardFooter className={styles.cardFooter}>
        <Link href={storeURI}>
          <a>Ver tienda</a>
        </Link>
      </CardFooter>
    </Card>
  );
}
