import { useQuery } from "@apollo/client";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { sections } from "../../../constants/sectionNames";
import useNotification from "../../../hooks/useNotification";
import useUserPP from "../../../hooks/useUserPP";
import { landScapeImages } from "../../../mock/images";
import { CONTENT_BY_SECTION_QUERY } from "../../../queries/customContent";
import {
  CONTENT_BY_SECTION,
  CONTENT_BY_SECTIONVariables,
} from "../../../queries/__generated__/CONTENT_BY_SECTION";
import { LoginSchema } from "../../../schemas/user";
import { Logo } from "../Logo";
import styles from "./Login.module.css";

export default function Login(): JSX.Element {
  const [firstFocus, setFirstFocus] = useState(false);
  const [lastFocus, setLastFocus] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string | null>();
  const router = useRouter();
  const { user } = useUserPP();
  const { signin } = useUserPP();

  const { data: background } = useQuery<
    CONTENT_BY_SECTION,
    CONTENT_BY_SECTIONVariables
  >(CONTENT_BY_SECTION_QUERY, {
    variables: { section: sections.loginBackground },
  });

  /* async function handleSignIn(values: UserProps) {
    const res = await signin({
      variables: {
        email: values.email,
        password: values.password
      }
    });

    if (
      res.data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordFailure'
    ) {
      addNotification({
        message: 'Usuario o Contraseña Incorrectos',
        type: 'danger'
      });
    } else {
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  } */

  useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    background?.allCustomContents
      ? setBackgroundImage(
          background?.allCustomContents[0]?.image1?.publicUrlTransformed
        )
      : setBackgroundImage(landScapeImages[0]);
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, [background?.allCustomContents]);

  useEffect(() => {
    if (!router.isReady) return;

    if (user) {
      router.push("/");
    }
  }, [router, user]);

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
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                      signin && signin(values);
                    }}
                    validationSchema={LoginSchema}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <CardHeader className="text-center">
                          <div
                            className={`logo-container ${styles.logoContainer}`}
                          >
                            <Logo variant="full" />
                          </div>
                        </CardHeader>
                        <CardBody>
                          {errors.email && touched.email && errors.email}
                          <InputGroup
                            className={
                              "no-border input-lg" +
                              (firstFocus ? " input-group-focus" : "")
                            }
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>

                            <Input
                              placeholder="Correo ..."
                              name="email"
                              type="email"
                              value={values.email}
                              onFocus={() => setFirstFocus(true)}
                              onBlur={() => setFirstFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                          <InputGroup
                            className={
                              "no-border input-lg" +
                              (lastFocus ? " input-group-focus" : "")
                            }
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Contraseña ..."
                              type="password"
                              name="password"
                              onFocus={() => setLastFocus(true)}
                              onBlur={() => setLastFocus(false)}
                              onChange={handleChange}
                            ></Input>
                          </InputGroup>
                          <div>
                            ¿No tienes cuenta?
                            <Link href="/signup">
                              <a style={{ color: "var(--info)" }}>
                                {" "}
                                registrate!
                              </a>
                            </Link>
                          </div>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button
                            block
                            type="submit"
                            className={`btn-round ${styles.boton}`}
                            color="primary"
                            size="lg"
                          >
                            Iniciar Sesión
                          </Button>
                        </CardFooter>
                        <Link href="/forgot-password">
                          <Label style={{ cursor: "pointer" }}>
                            Olvidé mi contraseña
                          </Label>
                        </Link>
                      </Form>
                    )}
                  </Formik>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
