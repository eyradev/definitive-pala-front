import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Row } from "reactstrap";
import { Section } from "components/home";
import { StandardLayout } from "components/layout";
import { PromoBanner } from "components/promoBanner";
import { ProductSearchPage, SearchFilter } from "components/search";
import { sections } from "constants/sectionNames";
import { CONTENT_BY_SECTION_QUERY } from "queries/customContent";
import {
  CONTENT_BY_SECTION,
  CONTENT_BY_SECTIONVariables,
} from "queries/__generated__/CONTENT_BY_SECTION";
import { PRODUCT_SEARCHVariables } from "queries/__generated__/PRODUCT_SEARCH";

export default function SearchPage(): JSX.Element {
  const router = useRouter();
  const {
    name: urlName,
    key: urlKey,
    category,
    illness,
    store,
    offersOnly,
    minPrice,
    maxPrice,
    maxCalories,
    minCalories,
    maxSodium,
    minSodium,
  } = router.query;

  const key = urlKey ? decodeURIComponent(urlKey as string) : undefined;
  const name = urlName ? decodeURIComponent(urlName as string) : undefined;

  useEffect(() => {
    if (!router.isReady) return;

    document.body.classList.add("ecommerce-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    if (!urlKey) {
      router.push("/");
    }

    return () => {
      document.body.classList.remove("ecommerce-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, [router, urlKey]);

  const [cnt, setCnt] = useState(1);
  const [lastPage, setLastPage] = useState(false);

  const lastPageReached = () => {
    setLastPage(true);
  };

  const whereInput: PRODUCT_SEARCHVariables = {
    input: {
      status: "AVAILABLE",
      ...(!!offersOnly && { salePrice_not: null }),
      ...((category || illness) && {
        category_some: {
          OR: [{ id_in: category as string[] }, { id_in: illness as string[] }],
        },
      }),
      ...(store && {
        store: {
          id_in: store as string[],
        },
      }),
      ...(minPrice && { price_gt: +minPrice }),
      ...(maxPrice && { price_lt: +maxPrice }),
      ...(maxCalories && { calories100gr_lt: +maxCalories }),
      ...(minCalories && { calories100gr_gt: +minCalories }),
      ...(maxSodium && { sodio_lt: +maxSodium }),
      ...(minSodium && { sodio_gt: +minSodium }),
    },
    search: name,
  };

  const pages: (JSX.Element | null)[] = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(
      <ProductSearchPage
        pageIdx={i}
        setLastPage={lastPageReached}
        searchQuery={whereInput}
        key={`page${i}`}
      />
    );
  }

  const { data: promoContent } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, { variables: { section: sections.searchPromo } });

  return (
    <div className="main">
      <Section title={!key ? `Resultados para: ${name}` : key}>
        {illness && (
          <Alert color="warning" style={{ color: "black" }}>
            Nuestros provedores indican que los siguientes productos son aptos
            para las afecciones seleccionadas
          </Alert>
        )}
        <Row>
          <Col md={3}>
            <SearchFilter />
          </Col>
          <Col md={9}>
            {pages}
            {!lastPage && (
              <Button
                color="primary"
                onClick={() => {
                  setCnt(cnt + 1);
                }}
              >
                Cargar más productos
              </Button>
            )}
          </Col>
        </Row>
      </Section>

      {promoContent?.allCustomContents && (
        <PromoBanner content={promoContent.allCustomContents} />
      )}
    </div>
  );
}

SearchPage.Layout = StandardLayout;
