import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import moment from "moment";
import { Col, Container, Media, Row } from "reactstrap";
import useNotification from "../../../hooks/useNotification";
import useUserPP from "../../../hooks/useUserPP";
import { ProductReview } from "../../../models/product";
import { GET_PRODUCT_BY_ID } from "../../../queries/product";
import { ADD_REVIEW_MUTATION } from "../../../queries/review";
import {
  ADD_REVIEW,
  ADD_REVIEWVariables,
} from "../../../queries/__generated__/ADD_REVIEW";
import { PRODUCT_BY_ID_allProducts_review } from "../../../queries/__generated__/PRODUCT_BY_ID";
import { productReviewSchema } from "../../../schemas/productReview";
import ProductReviewForm from "./ProductReviewForm";

interface Props {
  reviews: PRODUCT_BY_ID_allProducts_review[];
  productId: string;
}

export default function ProductReviews({
  reviews,
  productId,
}: Props): JSX.Element {
  const { user } = useUserPP();
  const { addNotification } = useNotification();

  const [addReview] = useMutation<ADD_REVIEW, ADD_REVIEWVariables>(
    ADD_REVIEW_MUTATION,
    {
      refetchQueries: [{ query: GET_PRODUCT_BY_ID, variables: { productId } }],
    }
  );

  const handleReviewSubmit = async (values: ProductReview) => {
    if (!values.score) return;

    const { errors } = await addReview({
      variables: {
        comment: values.comment,
        productId: productId,
        score: values.score,
      },
    });

    if (errors) {
      addNotification({
        message: "Error agregando mensaje, vuelve a intentarlo más tarde",
        type: "danger",
      });
    } else {
      addNotification({
        message: "Se han enviado tus comentarios :)",
        type: "success",
      });
    }
  };

  const [userReview] = reviews.filter(
    (rev) => user && rev.user?.id === user.id
  );
  const visibleReviews = reviews
    .filter((rev) => !!rev.visible)
    .slice(0, 5)
    .sort((a, b) => {
      const dateA = a.dateCreated as string | null;
      const dateB = b.dateCreated as string | null;

      if (dateA && !dateB) return 1;
      if (dateB && !dateA) return -1;

      return moment(dateB).diff(moment(dateA));
    });

  return (
    <div className="section section-comments">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            {visibleReviews.length > 0 && (
              <div className="media-area">
                <h3 className="title text-center">
                  {visibleReviews.length} Reseñas
                </h3>
                {visibleReviews.map((review) => (
                  <Media key={review.id}>
                    <Media body>
                      <Media heading tag="h5">
                        {review.user?.name || "usuario"}
                        <small>· {review.points}⭐</small>

                        {review.dateCreated && (
                          <div style={{ display: "inline", fontSize: "small" }}>
                            {" "}
                            {moment(review.dateCreated).format("D/M/Y")}
                          </div>
                        )}
                      </Media>
                      <p>{review.comments}</p>
                    </Media>
                  </Media>
                ))}
              </div>
            )}
            {userReview ? (
              <h3 className="title text-center">
                {userReview.visible
                  ? "Ya calificaste este producto"
                  : "Se ha enviado tu calificación"}
              </h3>
            ) : (
              <>
                <h3 className="title text-center">Danos Tu Opinion</h3>
                <Formik<ProductReview>
                  initialValues={{ comment: "", score: undefined }}
                  validationSchema={productReviewSchema}
                  onSubmit={handleReviewSubmit}
                >
                  <ProductReviewForm />
                </Formik>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
