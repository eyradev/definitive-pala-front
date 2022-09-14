import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox, UseComboboxStateChange } from 'downshift';
import { debounce } from 'lodash';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputProps,
  Spinner
} from 'reactstrap';
import { SEARCH_TITLE } from '../../../queries/product';
import {
  SEARCH_TITLE_QUERY,
  SEARCH_TITLE_QUERYVariables
} from '../../../queries/__generated__/SEARCH_TITLE_QUERY';
import styles from './Searchbar.module.css';

interface SearchItem {
  id: string;
  name: string;
}

interface Props {
  inputProps?: Omit<InputProps, 'type' | 'onFocus' | 'onBlur' | 'placeholder'>;
}

export default function Searchbar({ inputProps }: Props): JSX.Element {
  resetIdCounter();

  const [faFocus, setFaFocus] = useState(false);
  const [igWidth, setIgWidth] = useState(100);

  const router = useRouter();

  const [findItems, { loading, data }] = useLazyQuery<
    SEARCH_TITLE_QUERY,
    SEARCH_TITLE_QUERYVariables
  >(SEARCH_TITLE, {
    variables: { searchTerm: '' },
    fetchPolicy: 'no-cache'
  });
  const findItemsChill = debounce(findItems, 350);

  const products = (data?.products as SearchItem[]) || [];
  const categories = (data?.categories as SearchItem[]) || [];
  const illnesses = (data?.illnesses as SearchItem[]) || [];
  const stores = (data?.stores as SearchItem[]) || [];

  const handleInputFocus = () => setFaFocus(true);
  const handleInputBlur = () => setFaFocus(false);

  const handleValueChange = ({
    inputValue
  }: UseComboboxStateChange<SearchItem>) => {
    findItemsChill({ variables: { searchTerm: inputValue || '' } });
  };

  const {
    inputValue,
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps
  } = useCombobox<SearchItem>({
    items: [...products, ...categories, ...stores, ...illnesses],
    onInputValueChange: handleValueChange
  });

  useEffect(() => {
    const handleSizeChange = () => {
      const width = document.getElementById('pepe')?.clientWidth || 100;
      setIgWidth(width);
    };

    handleSizeChange();

    window.addEventListener('resize', handleSizeChange);
  }, []);

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue !== '') {
            router.push(
              `/search?name=${encodeURIComponent(
                inputValue
              )}&key=${encodeURIComponent(`Resultados para: ${inputValue}`)}`
            );
          }
        }}
      >
        <div {...getComboboxProps()}>
          <InputGroup className={faFocus ? 'input-group-focus' : ''} id="pepe">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                {loading ? (
                  <Spinner type="grow" color="primary" size="sm" />
                ) : (
                  <i className="fas fa-search" />
                )}
              </InputGroupText>
            </InputGroupAddon>
            <Input
              {...getInputProps({
                type: 'search',
                placeholder: 'Buscar',
                onFocus: handleInputFocus,
                onBlur: handleInputBlur,
                ...inputProps
              })}
            />
          </InputGroup>
        </div>
      </form>

      <div
        {...getMenuProps({
          className: styles.searchResults,
          style: {
            display:
              isOpen &&
              (categories.length ||
                products.length ||
                stores.length ||
                illnesses.length)
                ? 'inherit'
                : 'none',
            width: `calc(${igWidth}px - 20px)`
          }
        })}
      >
        <ul>
          {products.length > 0 && <li className={styles.header}>Productos</li>}
          {products.map((product) => (
            <li
              {...getItemProps({ item: product, key: product.id })}
              key={product.id}
            >
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    name: encodeURIComponent(product.name),
                    key: encodeURIComponent(`Resultados para: ${product.name}`)
                  }
                }}
              >
                {product?.name}
              </Link>
            </li>
          ))}
          {categories.length > 0 && (
            <li className={styles.header}>Categorias</li>
          )}
          {categories.map((category) => (
            <li
              {...getItemProps({ item: category, key: category.id })}
              key={category.id}
            >
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    category: category.id,
                    key: encodeURIComponent(`Categoría: ${category.name}`)
                  }
                }}
              >
                {category?.name}
              </Link>
            </li>
          ))}
          {illnesses.length > 0 && <li className={styles.header}>Apto Para</li>}
          {illnesses.map((illness) => (
            <li
              {...getItemProps({ item: illness, key: illness.id })}
              key={illness.id}
            >
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    illness: illness.id,
                    key: encodeURIComponent(`Apto Para: ${illness.name}`)
                  }
                }}
              >
                {illness?.name}
              </Link>
            </li>
          ))}
          {stores.length > 0 && <li className={styles.header}>Tiendas</li>}
          {stores.map((store) => (
            <li
              {...getItemProps({ item: store, key: store.id })}
              key={store.id}
            >
              <Link
                href={{
                  pathname: '/search',
                  query: {
                    store: store.id,
                    key: encodeURIComponent(`Tienda: ${store.name}`)
                  }
                }}
              >
                {store?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
