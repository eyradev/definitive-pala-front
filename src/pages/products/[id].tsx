import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";
import { Section } from "components/home";
import { StandardLayout } from "components/layout";
import {
  ProductDetails,
  ProductList,
  ProductReviews,
} from "components/product";
import { PromoBanner } from "components/promoBanner";
import { Loading, ProductHeader } from "components/UI";
import { sections } from "constants/sectionNames";
import { CONTENT_BY_SECTION_QUERY } from "queries/customContent";
import {
  GET_PRODUCT_BY_ID,
  TOP_SIMILAR_PRODUCTS_QUERY,
  TOP_STORE_PRODUCTS_QUERY,
} from "queries/product";
import {
  CONTENT_BY_SECTION,
  CONTENT_BY_SECTIONVariables,
} from "queries/__generated__/CONTENT_BY_SECTION";
import {
  PRODUCT_BY_ID,
  PRODUCT_BY_IDVariables,
} from "queries/__generated__/PRODUCT_BY_ID";
import {
  TOP_SIMILAR_PRODUCTS,
  TOP_SIMILAR_PRODUCTSVariables,
} from "queries/__generated__/TOP_SIMILAR_PRODUCTS";
import {
  TOP_STORE_PRODUCTS,
  TOP_STORE_PRODUCTSVariables,
} from "queries/__generated__/TOP_STORE_PRODUCTS";
import useUserPP from "hooks/useUserPP";
import { RecommendedProductsSection } from "components/recommended-products-section";

export default function ProductPage(): JSX.Element {
  useEffect(() => {
    document.body.classList.add("product-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("product-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const router = useRouter();
  const { user } = useUserPP();
  const productId = router.query.id as string | "";

  const { data, error, loading } = useQuery<
    PRODUCT_BY_ID,
    PRODUCT_BY_IDVariables
  >(GET_PRODUCT_BY_ID, {
    variables: {
      productId,
    },
    skip: !productId,
  });

  const { data: promoContent } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, {
    variables: { section: sections.productDetailsPromo },
  });

  const product =
    data?.allProducts && data.allProducts.length > 0
      ? data.allProducts[0]
      : undefined;

  const { data: storeProducts } = useQuery<
    TOP_STORE_PRODUCTS,
    TOP_STORE_PRODUCTSVariables
  >(TOP_STORE_PRODUCTS_QUERY, {
    variables: {
      selectedProductId: product?.id || "",
      storeId: product?.store?.id || "",
    },
  });

  const productCategories =
    product?.category.map((category) => category.id) || [];

  const { data: similarProducts } = useQuery<
    TOP_SIMILAR_PRODUCTS,
    TOP_SIMILAR_PRODUCTSVariables
  >(TOP_SIMILAR_PRODUCTS_QUERY, {
    variables: { categories: productCategories, productId: product?.id || "" },
  });

  if (loading && !error) {
    return <Loading />;
  } else if (!product) {
    return (
      <div style={{ height: "80vh", backgroundColor: "white" }}>
        <Section title="Producto no encontrado">
          <p>No se encontro el producto seleccionado</p>
          <Link href="/">
            <a className="btn btn-info">Volver</a>
          </Link>
        </Section>
      </div>
    );
  }

  return (
    <div>
      {product.store ? (
        <ProductHeader store={product?.store} />
      ) : (
        <div
          style={{
            height: "100px",
            backgroundColor: "white",
            width: "100%",
          }}
        />
      )}
      <div className="section">
        <ProductDetails product={product} />
      </div>
      <ProductReviews reviews={product.review} productId={product.id} />
      {storeProducts?.allProducts && storeProducts.allProducts.length > 0 && (
        <div style={{ backgroundColor: "#F2B73F" }}>
          <Section title={`Más Productos de ${product.store?.name}`}>
            <ProductList products={storeProducts.allProducts} />
          </Section>
        </div>
      )}

      {similarProducts?.allProducts && similarProducts.allProducts.length > 0 && (
        <div style={{ backgroundColor: "white" }}>
          <Section title="Tambien te puede interesar">
            <ProductList products={similarProducts.allProducts as any} />
          </Section>
        </div>
      )}

      {promoContent?.allCustomContents && (
        <PromoBanner content={promoContent.allCustomContents} />
      )}

      {user?.id && <RecommendedProductsSection userId={user.id} />}
    </div>
  );
}

ProductPage.Layout = StandardLayout;
