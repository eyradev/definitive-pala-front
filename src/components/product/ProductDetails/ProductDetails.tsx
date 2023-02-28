import { Form, Formik, FormikHelpers } from "formik";
import { useAddCartItemMutation } from "graphql/add-cart-item/add-cart-item.mutation";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  FormGroup,
  FormText,
  Input,
  Row,
} from "reactstrap";
import { formatCurrency } from "util/currency";
import { roundNumber } from "util/math";
import breakpoints from "../../../constants/breakpoints";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { ProductStock } from "../../../models/product";
import { PRODUCT_BY_ID_allProducts } from "../../../queries/__generated__/PRODUCT_BY_ID";
import { productStockSchema } from "../../../schemas/productStock";
import { CategoryIcon } from "../../category";
import { ProductMediaCarousel } from "../ProductMediaCarousel";
import { ProductTimeEstimation } from "../ProductTimeEstimation";
import styles from "./ProductDetails.module.css";

interface Props {
  product: PRODUCT_BY_ID_allProducts | null | undefined;
}

export default function ProductDetails({ product }: Props): JSX.Element | null {
  const [collapses, setCollapses] = useState([1]);
  const addCartItemMutation = useAddCartItemMutation();
  const isSM = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);
  const isMD = useMediaQuery(`(max-width: ${breakpoints.md}px)`);

  const addLineItem = addCartItemMutation?.[0];

  const changeCollapse = (collapse: number) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const handleCartAdd = async (
    values: ProductStock,
    { resetForm }: FormikHelpers<ProductStock>
  ) => {
    if (!addLineItem) return;
    if (product?.id) {
      addLineItem({
        variables: {
          productId: product.id,
          quantity: values.stock,
        },
      });
      resetForm({ values: { stock: 0 } });
    }
  };

  const categories = (
    <div
      className={styles.categoryWrapper}
      style={{
        display: isMD ? "flex" : undefined,
        alignItems: isMD ? "center" : undefined,
        justifyContent: isMD ? "space-evenly" : undefined,
      }}
    >
      {product?.category.map((category) => (
        <div key={category.id} className={styles.category}>
          <CategoryIcon category={category} />
        </div>
      ))}
    </div>
  );

  const visibleReviews = product?.review.filter((review) => !!review.visible);

  const score = visibleReviews?.reduce((acc, curr) => {
    if (curr && curr.points) {
      return acc + +curr.points / visibleReviews.length;
    }
    return acc;
  }, 0);

  return (
    <Container>
      <Row>
        <Col md="5">
          {product?.photo && (
            <ProductMediaCarousel
              content={product?.photo}
              productVideo={product.video}
            />
          )}
          {product?.productionTime && (
            <ProductTimeEstimation productionTime={product.productionTime} />
          )}
        </Col>
        <Col className="ml-auto mr-auto" md="6">
          <h2 className="title">
            {product?.name}{" "}
            {score && visibleReviews && visibleReviews.length > 0 && (
              <small style={{ fontWeight: "lighter" }}>
                {roundNumber(score, 1)}⭐
              </small>
            )}
          </h2>
          <h5
            className="category"
            style={{ display: "inline-block", color: "var(--info)" }}
          >
            <Link
              href={`/search?key=${encodeURIComponent(
                "Tienda " + product?.store?.name
              )}&store=${product?.store?.id}`}
            >
              {product?.store?.name}
            </Link>
          </h5>
          <h5 className="category" style={{ display: "inline-block" }}>
            &nbsp;/&nbsp;{product?.sku}
          </h5>
          <div style={{ display: "flex", fontSize: "0.7rem" }}>
            {product?.price && (
              <h2
                className="main-price"
                style={{
                  textDecoration: product?.salePrice ? "line-through" : "none",
                }}
              >
                {formatCurrency(product.price)}
              </h2>
            )}
            {product?.salePrice && (
              <h2 className="main-price" style={{ fontWeight: "normal" }}>
                &nbsp;{formatCurrency(product.salePrice)}
              </h2>
            )}
          </div>

          <div
            aria-multiselectable={true}
            className="card-collapse"
            id="accordion"
            role="tablist"
          >
            <Card className="card-plain">
              <CardHeader id="headingOne" role="tab">
                <a
                  aria-expanded={collapses.includes(1)}
                  data-parent="#accordion"
                  data-toggle="collapse"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    changeCollapse(1);
                  }}
                >
                  Descripción
                  <i className="now-ui-icons arrows-1_minimal-down" />
                </a>
              </CardHeader>
              <Collapse isOpen={collapses.includes(1)}>
                <CardBody>
                  <p>{product?.description}</p>
                  {isMD && categories}
                </CardBody>
              </Collapse>
            </Card>
            {(product?.calories100gr || product?.sodio) && (
              <Card className="card-plain">
                <CardHeader id="headingThree" role="tab">
                  <a
                    aria-expanded={collapses.includes(2)}
                    data-parent="#accordion"
                    data-toggle="collapse"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}
                  >
                    Tabla Nutricional
                    <i className="now-ui-icons arrows-1_minimal-down"></i>
                  </a>
                </CardHeader>
                <Collapse isOpen={collapses.includes(2)}>
                  <CardBody>
                    <ul>
                      {product?.calories100gr && (
                        <li>
                          <strong>Calorias (100gr)</strong>:{" "}
                          {product.calories100gr}
                        </li>
                      )}
                      {product?.sodio && (
                        <li>
                          <strong>Sodio</strong>: {product.sodio}
                        </li>
                      )}
                    </ul>
                  </CardBody>
                </Collapse>
              </Card>
            )}
          </div>
          <Formik<ProductStock>
            initialValues={{ stock: 1 }}
            validationSchema={productStockSchema}
            onSubmit={handleCartAdd}
          >
            {({ handleChange, touched, errors, values }) => (
              <Form>
                <Row className="justify-content-end">
                  <Col lg="8" sm="12" className={styles.stockForm}>
                    <div
                      style={{
                        width: "100%",
                        marginTop: isSM ? "10px" : undefined,
                      }}
                    >
                      <FormGroup
                        className={
                          errors.stock && touched.stock ? "has-danger" : ""
                        }
                      >
                        {!isSM && <label htmlFor="stock">Unidades</label>}

                        <Input
                          id="stock"
                          aria-describedby="stockHelp"
                          placeholder="Unidades"
                          type="number"
                          value={values.stock}
                          className={`form-control-lg ${
                            errors.stock &&
                            touched.stock &&
                            "form-control-danger"
                          }`}
                          name="stock"
                          onChange={handleChange}
                        />
                        <FormText
                          className="text-muted"
                          color="danger"
                          id="stockHelp"
                        >
                          {errors.stock}
                        </FormText>
                      </FormGroup>
                    </div>
                  </Col>
                  <Col className={styles.stockForm} sm="12" lg="4">
                    {!!addLineItem ? (
                      <Button
                        className="mr-3"
                        color="info"
                        style={{ whiteSpace: "nowrap" }}
                        type="submit"
                      >
                        Agregar al Carrito{" "}
                        <i className="now-ui-icons shopping_cart-simple" />
                      </Button>
                    ) : (
                      <Link href="/signup">
                        <a className="btn btn-primary mr-3" color="primary">
                          Registrate
                        </a>
                      </Link>
                    )}
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
        {!isMD && <Col md="1">{categories}</Col>}
      </Row>
    </Container>
  );
}
