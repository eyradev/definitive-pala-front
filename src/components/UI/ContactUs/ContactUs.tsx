import { useMutation } from "@apollo/client";
import { Formik, FormikHelpers } from "formik";
import Link from "next/link";
// reactstrap components
import { Card, CardHeader, Col, Container, Row } from "reactstrap";
import useNotification from "../../../hooks/useNotification";
import { ContactRequest } from "../../../models/contactRequest";
import { ADD_CONTACT_REQUEST_MUTATION } from "../../../queries/contactUs";
import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_REQUESTVariables,
} from "../../../queries/__generated__/ADD_CONTACT_REQUEST";
import { ContactRequestSchema } from "../../../schemas/contactRequest";
import ContactUsHeader from "../Headers/ContactUsHeader/ContactUsHeader";
import styles from "./ContactUs.module.css";
import ContactUsForm from "./ContactUsForm";

function ContactUs(): JSX.Element {
  const { addNotification } = useNotification();

  const [createContactUsRequest] = useMutation<
    ADD_CONTACT_REQUEST,
    ADD_CONTACT_REQUESTVariables
  >(ADD_CONTACT_REQUEST_MUTATION);

  const handleSubmit = async (
    values: ContactRequest,
    { resetForm }: FormikHelpers<ContactRequest>
  ) => {
    const { data } = await createContactUsRequest({
      variables: { data: values },
    });
    if (data) {
      addNotification({ message: "PQRSDF enviado", type: "success" });
      resetForm();
    }
  };

  return (
    <>
      <ContactUsHeader />
      <div className="main">
        <div className="contact-content">
          <Container>
            <div className={styles.Title}>
              <h2 className="title">Contactanos / PQRSDF</h2>
            </div>
            <div className={styles.Description}>
              <p className="description">
                Puede contactarnos con cualquier tema relacionado con nuestros
                Productos. Nos pondremos en contacto contigo lo antes posible.
                <br></br>
                <br></br>
              </p>
            </div>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Formik<ContactRequest>
                  initialValues={{
                    email: "",
                    type: "P",
                    name: "",
                    message: "",
                    phone: "",
                  }}
                  validationSchema={ContactRequestSchema}
                  onSubmit={handleSubmit}
                >
                  <ContactUsForm />
                </Formik>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <div className="card-collapse">
                  <Card className="card-plain">
                    <CardHeader id="headingOne" role="tab">
                      <Link href="/workwithus">
                        <a className={`link footer-link ${styles.links}`}>
                          ¿Quieres trabajar con nosotros?
                        </a>
                      </Link>
                    </CardHeader>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader id="headingTwo" role="tab">
                      <Link href="/productquestion">
                        <a className={`link footer-link ${styles.links}`}>
                          ¿Tienes preguntas sobre algún pedido?
                        </a>
                      </Link>
                    </CardHeader>
                  </Card>
                  <Card className="card-plain">
                    <CardHeader id="headingThree" role="tab">
                      <Link href="/FAQ">
                        <a className={`link footer-link ${styles.links}`}>
                          Preguntas Frecuentes
                        </a>
                      </Link>
                    </CardHeader>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
