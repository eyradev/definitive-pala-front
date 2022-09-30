import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Col, Row } from "reactstrap";
import { CategoryList } from "components/category";
import { Section } from "components/home";
import { HomeLayout } from "components/layout";
import { ProductList } from "components/product";
import { PromoBanner } from "components/promoBanner";
import { StoreList } from "components/store";
import { CarouselHeader, Loading } from "components/UI";
import { sections } from "constants/sectionNames";
import useUserPP from "hooks/useUserPP";
import { TOP_CATEGORIES_QUERY } from "queries/category";
import { CONTENT_BY_SECTION_QUERY } from "queries/customContent";
import { PRODUCT_OFFERS_QUERY } from "queries/product";
import { TOP_STORES_QUERY } from "queries/store";
import {
  CONTENT_BY_SECTION,
  CONTENT_BY_SECTIONVariables,
} from "queries/__generated__/CONTENT_BY_SECTION";
import { PRODUCT_OFFERS } from "queries/__generated__/PRODUCT_OFFERS";
import { TOP_CATEGORIES } from "queries/__generated__/TOP_CATEGORIES";
import { TOP_STORES } from "queries/__generated__/TOP_STORES";
import { RecommendedProductsSection } from "components/recommended-products-section";

export default function HomePage(): JSX.Element {
  const router = useRouter();
  const { user } = useUserPP();

  const { data: productOffers, loading: productLoading } =
    useQuery<PRODUCT_OFFERS>(PRODUCT_OFFERS_QUERY);

  const { data: headerContent, loading: headerLoading } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, { variables: { section: sections.homeHeader } });

  const { data: promoContent, loading: promoLoading } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, { variables: { section: sections.homePromo } });

  const { data: topStores, loading: storesLoading } =
    useQuery<TOP_STORES>(TOP_STORES_QUERY);

  const { data: topCategories, loading: categoriesLoading } =
    useQuery<TOP_CATEGORIES>(TOP_CATEGORIES_QUERY);

  useEffect(() => {
    if (!router.isReady) return;
    if (user && !user?.address) {
      router.push("/personal-info");
    }
  }, [user, router]);

  if (
    productLoading ||
    headerLoading ||
    promoLoading ||
    storesLoading ||
    categoriesLoading
  )
    return <Loading />;

  return (
    <>
      {headerContent?.allCustomContents && (
        <CarouselHeader content={headerContent?.allCustomContents} />
      )}
      <div className="main">
        {productOffers?.allProducts && (
          <Section
            title="Promociones"
            small={{
              text: "ver todas",
              path: `/search?key=${encodeURIComponent(
                "Todas Nuestras Ofertas!"
              )}&offersOnly=true`,
            }}
          >
            <Row>
              <Col>
                <ProductList products={productOffers.allProducts} />
              </Col>
            </Row>
          </Section>
        )}

        {user?.id && <RecommendedProductsSection userId={user.id} />}

        {promoContent?.allCustomContents?.length && (
          <PromoBanner content={promoContent.allCustomContents} />
        )}

        {topStores?.allStores && (
          <Section
            title="Tiendas"
            small={{
              text: "ver todas",
              path: `/search?key=${encodeURIComponent("Todos las Tiendas")}`,
            }}
          >
            <Row>
              <Col>
                <StoreList stores={topStores.allStores} />
              </Col>
            </Row>
          </Section>
        )}

        {topCategories?.allCategories &&
          topCategories.allCategories.length > 0 && (
            <Section title="Categorias">
              <Row>
                <Col>
                  <CategoryList categories={topCategories.allCategories} />
                </Col>
              </Row>
            </Section>
          )}
      </div>
    </>
  );
}

HomePage.Layout = HomeLayout;
