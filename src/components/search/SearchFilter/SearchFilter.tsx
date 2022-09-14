import { useQuery } from '@apollo/client';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Collapse,
  UncontrolledTooltip
} from 'reactstrap';
import {
  GET_MAX_PRICE,
  GET_MIN_PRICE,
  MAX_NUTRITIONAL_VALUES_QUERY
} from '../../../queries/product';
import { MAX_NUTRITIONAL_VALUES } from '../../../queries/__generated__/MAX_NUTRITIONAL_VALUES';
import { PRODUCT_MAX_PRICE } from '../../../queries/__generated__/PRODUCT_MAX_PRICE';
import { PRODUCT_MIN_PRICE } from '../../../queries/__generated__/PRODUCT_MIN_PRICE';
import { getMaxBetween, getMinBetween } from '../../../util/math';
import { Categories } from './Categories';
import { Illnesses } from './Illnesses';
import { PriceSelector } from './PriceSelector';
import { ProductDetails } from './ProductDetails';
import { Stores } from './Stores';

interface Range {
  min: number;
  max: number;
}

export interface ProductSearchFilter {
  priceRange: Range;
  calories: Range;
  sodium: Range;
  categories: string[];
  stores: string[];
  illnesses: string[];
  offersOnly: boolean;
}

export default function SearchFilter(): JSX.Element | null {
  const [collapses, setCollapses] = useState<number[]>([]);
  const router = useRouter();

  const {
    category: urlCategories,
    store: urlStores,
    illness: urlIllnesses,
    maxPrice: urlMax,
    minPrice: urlMin,
    maxCalories: urlMaxCalories,
    minCalories: urlMinCalories,
    maxSodium: urlMaxSodium,
    minSodium: urlMinSodium,
    offersOnly: urlOffersOnly
  } = router.query;

  const { data: maxProduct } = useQuery<PRODUCT_MAX_PRICE>(GET_MAX_PRICE);
  const { data: minProduct } = useQuery<PRODUCT_MIN_PRICE>(GET_MIN_PRICE);

  const maxPrice = maxProduct?.allProducts
    ? maxProduct.allProducts[0]?.price
    : undefined;
  const minPrice = minProduct?.allProducts
    ? minProduct.allProducts[0]?.price
    : undefined;

  const { data: maxNutritionalValues } = useQuery<MAX_NUTRITIONAL_VALUES>(
    MAX_NUTRITIONAL_VALUES_QUERY
  );
  const maxCalories = maxNutritionalValues?.maxCalories?.length
    ? maxNutritionalValues.maxCalories[0]?.calories100gr || 0
    : 0;
  const maxSodium = maxNutritionalValues?.maxSodium?.length
    ? maxNutritionalValues.maxSodium[0]?.sodio || 0
    : 0;

  const changeCollapse = (collapse: number) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const onFilterUpdate = async (values: ProductSearchFilter) => {
    const actualMax = +values.priceRange.max;
    const actualMin = +values.priceRange.min;
    const currentMaxCalories = +values.calories.max;
    const currentMinCalories = +values.calories.min;
    const currentMaxSodium = +values.sodium.max;
    const currentMinSodium = +values.sodium.min;

    router.push({
      pathname: '/search',
      query: {
        ...(router.query.name && { name: router.query.name }),
        key: encodeURIComponent('Busqueda'),
        category: values.categories,
        store: values.stores,
        illness: values.illnesses,
        ...(!!values.offersOnly && { offersOnly: values.offersOnly }),
        ...(actualMax != maxPrice && { maxPrice: actualMax }),
        ...(actualMin != minPrice && { minPrice: actualMin }),
        ...(currentMaxCalories != maxCalories && {
          maxCalories: currentMaxCalories
        }),
        ...(currentMinCalories !== 0 && { minCalories: currentMinCalories }),
        ...(currentMaxSodium != maxSodium && {
          maxSodium: currentMaxSodium
        }),
        ...(currentMinSodium !== 0 && { minSodium: currentMinSodium })
      }
    });
  };

  const handleResetClick = () => {
    router.push({ pathname: '/search', query: { key: 'Busqueda' } });
  };

  if (!maxPrice || !minPrice) return null;

  return (
    <Formik<ProductSearchFilter>
      initialValues={{
        priceRange: {
          min: urlMin
            ? Math.min(Math.max(minPrice, +urlMin), maxPrice)
            : minPrice,
          max: urlMax
            ? Math.max(Math.min(maxPrice, +urlMax), minPrice)
            : maxPrice
        },
        calories: {
          min: urlMinCalories
            ? getMinBetween(0, maxCalories, parseInt(urlMinCalories as string))
            : 0,
          max: urlMaxCalories
            ? getMaxBetween(0, maxCalories, parseInt(urlMaxCalories as string))
            : maxCalories
        },
        sodium: {
          min: urlMinSodium
            ? getMinBetween(0, maxSodium, parseInt(urlMinSodium as string))
            : 0,
          max: urlMaxSodium
            ? getMaxBetween(0, maxSodium, parseInt(urlMaxSodium as string))
            : maxSodium
        },
        offersOnly: !!urlOffersOnly,
        categories: urlCategories ? (urlCategories as string[]) : [],
        stores: urlStores ? (urlStores as string[]) : [],
        illnesses: urlIllnesses ? (urlIllnesses as string[]) : []
      }}
      onSubmit={onFilterUpdate}
      enableReinitialize={true}
    >
      <Form>
        <div className="collapse-panel">
          <CardBody>
            <Card className="card-refine card-plain">
              <CardTitle tag="h4">
                Refine{' '}
                <Button
                  className="btn-icon btn-neutral pull-right"
                  color="default"
                  id="resetButton"
                  onClick={handleResetClick}
                >
                  <i className="arrows-1_refresh-69 now-ui-icons" />
                </Button>
                <UncontrolledTooltip delay={0} target="resetButton">
                  Limpiar Filtros
                </UncontrolledTooltip>
              </CardTitle>

              <CardHeader id="headingOne" role="tab">
                <h6 className="mb-0">
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(1)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCollapse(1);
                    }}
                  >
                    Precio & Ofertas{' '}
                    <i className="now-ui-icons arrows-1_minimal-down" />
                  </a>
                </h6>
              </CardHeader>
              <Collapse isOpen={collapses.includes(1)}>
                <PriceSelector min={minPrice} max={maxPrice} />
              </Collapse>
            </Card>
            <Card className="card-refine card-plain">
              <CardHeader id="headingTwo" role="tab">
                <h6>
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(2)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}
                  >
                    Detalles de Producto{' '}
                    <i className="now-ui-icons arrows-1_minimal-down" />
                  </a>
                </h6>
              </CardHeader>
              <Collapse isOpen={collapses.includes(2)}>
                <ProductDetails
                  maxCalories={maxCalories}
                  maxSodium={maxSodium}
                />
              </Collapse>
            </Card>
            <Card className="card-refine card-plain">
              <CardHeader id="headingTwo" role="tab">
                <h6>
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(3)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCollapse(3);
                    }}
                  >
                    Categoria{' '}
                    <i className="now-ui-icons arrows-1_minimal-down" />
                  </a>
                </h6>
              </CardHeader>
              <Collapse isOpen={collapses.includes(3)}>
                <Categories />
              </Collapse>
            </Card>
            <Card className="card-refine card-plain">
              <CardHeader id="headingTwo" role="tab">
                <h6>
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(4)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCollapse(4);
                    }}
                  >
                    Apto Para{' '}
                    <i className="now-ui-icons arrows-1_minimal-down" />
                  </a>
                </h6>
              </CardHeader>
              <Collapse isOpen={collapses.includes(4)}>
                <Illnesses />
              </Collapse>
            </Card>
            <Card className="card-refine card-plain">
              <CardHeader id="headingThree" role="tab">
                <h6>
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(5)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCollapse(5);
                    }}
                  >
                    Tienda <i className="now-ui-icons arrows-1_minimal-down" />
                  </a>
                </h6>
              </CardHeader>
              <Collapse isOpen={collapses.includes(5)}>
                <Stores />
              </Collapse>
            </Card>
          </CardBody>
          <Card
            className="card-refine card-plain"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginTop: '-30px',
              marginLeft: '30px'
            }}
          >
            <Button type="submit" color="info" outline>
              Actualizar
            </Button>
          </Card>
        </div>
      </Form>
    </Formik>
  );
}
