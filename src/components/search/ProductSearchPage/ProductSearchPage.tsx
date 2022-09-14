import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { perPage } from '../../../config';
import { GET_PRODUCTS } from '../../../queries/product';
import {
  PRODUCT_SEARCH,
  PRODUCT_SEARCHVariables
} from '../../../queries/__generated__/PRODUCT_SEARCH';
import { Section } from '../../home';
import { ProductList } from '../../product';

interface Props {
  searchQuery: Pick<PRODUCT_SEARCHVariables, 'input' | 'search'>;
  setLastPage: () => void;
  pageIdx: number;
}

export default function ProductSearchPage({
  searchQuery,
  pageIdx,
  setLastPage
}: Props): JSX.Element | null {
  const { data: products } = useQuery<PRODUCT_SEARCH, PRODUCT_SEARCHVariables>(
    GET_PRODUCTS,
    {
      variables: {
        search: searchQuery.search,
        input: searchQuery.input,
        skip: pageIdx * perPage,
        first: perPage + 1
      },
      refetchWritePolicy: 'overwrite'
    }
  );

  if (pageIdx === 0 && !products?.allProducts?.length) {
    setLastPage();
    return (
      <Section title="Productos no Encontrados">
        <h4>
          Actualmente no ofrecemos productos que cumplan con las condiciones de
          tu busqueda. Si deseas contactarte con nosotros puedes hacerlo{' '}
          <Link href="/contactus">aquí</Link>, mientras tanto te invitamos a
          explorar{' '}
          <Link
            href={`/search?key=${encodeURIComponent(
              'Todas Nuestras Ofertas!'
            )}&offersOnly=true`}
          >
            nuestras ofertas
          </Link>
          !
        </h4>
      </Section>
    );
  }

  if (!(products?.allProducts && products.allProducts.length > 0)) {
    setLastPage();
    return null;
  }

  const items = [...products.allProducts];

  if (products.allProducts.length !== perPage + 1) {
    setLastPage();
  } else {
    items.pop();
  }

  return (
    <ProductList products={items} xScrollable={false} md={6} lg={6} xl={4} />
  );
}
