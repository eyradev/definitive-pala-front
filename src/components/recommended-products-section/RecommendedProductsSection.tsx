import { useQuery } from "@apollo/client";
import { Section } from "components/home";
import { ProductList } from "components/product";
import LoadingPage from "components/UI/Loading/Loading";
import { Col, Row } from "reactstrap";
import { RECOMMENDED_PRODUCTS_QUERY } from "./recommended-products.query";
import {
  RECOMMENDED_PRODUCTS,
  RECOMMENDED_PRODUCTSVariables,
} from "./__generated__/RECOMMENDED_PRODUCTS";

interface Props {
  userId: string;
}

export default function RecommendedProductsSection({
  userId,
}: Props): JSX.Element | null {
  const { data, error, loading } = useQuery<
    RECOMMENDED_PRODUCTS,
    RECOMMENDED_PRODUCTSVariables
  >(RECOMMENDED_PRODUCTS_QUERY, {
    variables: { userId },
  });

  if (loading) return <LoadingPage />;
  if (error || !data?.allProducts?.length) return null;

  return (
    <Section
      title="Para ti"
      small={{
        text: "más",
        path: `/search?key=${encodeURIComponent("Nuestros Productos!")}`,
      }}
    >
      <Row>
        <Col>
          <ProductList products={data.allProducts} />
        </Col>
      </Row>
    </Section>
  );
}
