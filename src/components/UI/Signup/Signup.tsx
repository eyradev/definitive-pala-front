import { useQuery } from "@apollo/client";
import { Field, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { tcUrl } from "../../../config";
import { sections } from "../../../constants/sectionNames";
import useNotification from "../../../hooks/useNotification";
import useUserPP from "../../../hooks/useUserPP";
import { landScapeImages } from "../../../mock/images";
import { CONTENT_BY_SECTION_QUERY } from "../../../queries/customContent";
import { SIGNUP_CONTENT_QUERY } from "../../../queries/signUpContent";
import {
  CONTENT_BY_SECTION,
  CONTENT_BY_SECTIONVariables,
} from "../../../queries/__generated__/CONTENT_BY_SECTION";
import { SIGNUP_CONTENT } from "../../../queries/__generated__/SIGNUP_CONTENT";
import { SignupSchema } from "../../../schemas/user";
import styles from "./Signup.module.css";

export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  docType: string;
  docNumber: string;
}

export default function Signup(): JSX.Element {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [docTypeFocus, setDocTypeFocus] = useState(false);
  const [docNumFocus, setDocNumFocus] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string | null>();
  const { addNotification } = useNotification();
  const router = useRouter();
  const { user } = useUserPP();
  const { signup } = useUserPP();

  const { data: background } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, {
    variables: { section: sections.signupBackground },
  });

  const { data: signUpContent } =
    useQuery<SIGNUP_CONTENT>(SIGNUP_CONTENT_QUERY);

  useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    background?.allCustomContents
      ? setBackgroundImage(
          background?.allCustomContents[0]?.image1?.publicUrlTransformed
        )
      : setBackgroundImage(landScapeImages[0]);
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, [background?.allCustomContents]);

  useEffect(() => {
    if (!router?.isReady) return;
    if (user) router.push("/");
  }, [user, router]);

  return (
    <>
      <div className="page-header header-filter" filter-color="black">
        <div
          className={`page-header-image ${styles.pageImage}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6" lg="4">
                {signUpContent?.allSignUpContents?.map((content) => {
                  return (
                    <>
                      <div className="info info-horizontal">
                        <div className="description">
                          <h5 className="info-title">{content?.paragraph1}</h5>
                          <p className="description">{content?.description1}</p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="description">
                          <h5 className="info-title">{content?.paragraph2}</h5>
                          <p className="description">{content?.description2}</p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="description">
                          <h5 className="info-title">{content?.paragraph3}</h5>
                          <p className="description">{content?.description3}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Col>
              <Col className="mr-auto" md="6" lg="4">
                <Card className="card-signup">
                  <CardBody>
                    <CardTitle
                      className={`text-center ${styles.Titulo}`}
                      tag="h4"
                    >
                      Registro
                    </CardTitle>
                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        phone: "",
                        docType: "13",
                        docNumber: "",
                        acceptTerms: false,
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={(values) => {
                        signup && signup(values);
                      }}
                    >
                      {({ values, errors, handleChange, handleSubmit }) => (
                        <Form
                          action=""
                          className="form"
                          method=""
                          onSubmit={handleSubmit}
                        >
                          <InputGroup
                            className={firstFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              autoComplete="firstname"
                              placeholder="Nombre..."
                              type="text"
                              name="firstName"
                              onFocus={() => setFirstFocus(true)}
                              onBlur={() => setFirstFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className={lastNameFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              autoComplete="lastname"
                              placeholder="Apellidos..."
                              value={values.lastName}
                              type="text"
                              name="lastName"
                              onFocus={() => setLastNameFocus(true)}
                              onBlur={() => setLastNameFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className={phoneFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons tech_mobile"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              autoComplete="phone"
                              placeholder="Teléfono..."
                              type="text"
                              name="phone"
                              onFocus={() => setPhoneFocus(true)}
                              onBlur={() => setPhoneFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className={emailFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              autoComplete="email"
                              placeholder="Correo..."
                              name="email"
                              type="email"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className={lastFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              autoComplete="password"
                              placeholder="Contraseña..."
                              type="password"
                              name="password"
                              onFocus={() => setLastFocus(true)}
                              onBlur={() => setLastFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className={docTypeFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons business_badge"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              value={values.docType}
                              name="docType"
                              placeholder="Tipo de Documento..."
                              type="select"
                              onFocus={() => setDocTypeFocus(true)}
                              onBlur={() => setDocTypeFocus(false)}
                              onChange={handleChange}
                            >
                              <option value="13">Cédula de ciudadanía</option>
                              <option value="31">NIT</option>
                              <option value="22">Cédula de extranjería</option>
                              <option value="42">
                                Documento de identificación extranjero
                              </option>
                              <option value="50">NIT de otro país</option>
                              <option value="91">NUIP</option>
                              <option value="41">Pasaporte</option>
                              <option value="14">
                                Permiso especial de permanencia PEP
                              </option>
                              <option value="11">Registro civil</option>
                              <option value="21">Tarjeta de extranjería</option>
                              <option value="12">Tarjeta de identidad</option>
                            </Input>
                          </InputGroup>
                          <InputGroup
                            className={docNumFocus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons business_badge"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              value={values.docNumber}
                              name="docNumber"
                              placeholder="Número de Documento..."
                              type="text"
                              onFocus={() => setDocNumFocus(true)}
                              onBlur={() => setDocNumFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <FormGroup className={styles.TyC}>
                            <Field
                              type="checkbox"
                              name="acceptTerms"
                              className={styles.Checkbox}
                            ></Field>{" "}
                            <Label>
                              Acepto los{" "}
                              <a
                                href={tcUrl || "#"}
                                style={{ color: "var(--info)" }}
                              >
                                términos y condiciones
                              </a>
                              .
                            </Label>
                            <div style={{ marginTop: "20px" }}>
                              ¿Ya tienes cuenta?
                              <Link href="/login">
                                <a style={{ color: "var(--info)" }}>
                                  {" "}
                                  ingresa!
                                </a>
                              </Link>
                            </div>
                          </FormGroup>
                          <CardFooter className="text-center">
                            <Button
                              className={`btn-round`}
                              onClick={() => {
                                if (
                                  values.email == "" ||
                                  values.password == "" ||
                                  values.firstName == "" ||
                                  values.lastName == "" ||
                                  values.phone == "" ||
                                  values.docNumber == "" ||
                                  errors.phone ||
                                  errors.password ||
                                  errors.docNumber ||
                                  !values.acceptTerms
                                ) {
                                  addNotification({
                                    message: `${
                                      errors.firstName ||
                                      errors.lastName ||
                                      errors.phone ||
                                      errors.email ||
                                      errors.password ||
                                      errors.docNumber ||
                                      errors.acceptTerms
                                    }`,
                                    type: "danger",
                                  });
                                }
                              }}
                              size="lg"
                              type="submit"
                              color="primary"
                            >
                              Registrarme
                            </Button>
                          </CardFooter>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
