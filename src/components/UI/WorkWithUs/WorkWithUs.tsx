/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@apollo/client';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import * as Yup from 'yup';
import useNotification from '../../../hooks/useNotification';
import { WORK_WITH_US_MUTATION } from '../../../queries/workWithUsRequest';
import {
  WORK_WITH_US,
  WORK_WITH_USVariables
} from '../../../queries/__generated__/WORK_WITH_US';
import WorkWithUsHeader from '../Headers/WorkWithUsHeader/WorkWithUsHeader';
import styles from './WorkWithUs.module.css';

export default function WorkWithUs(): JSX.Element {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const { addNotification } = useNotification();
  const router = useRouter();

  const [workWithUs] = useMutation<WORK_WITH_US, WORK_WITH_USVariables>(
    WORK_WITH_US_MUTATION
  );

  const handleSubmit = async (values: any) => {
    await workWithUs({
      variables: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        verified: '0'
      }
    }).then(() => {
      addNotification({
        message: 'Petición creada exitosamente',
        type: 'success'
      });
      setTimeout(() => {
        router.push('/');
      }, 1500);
    });
  };
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere el nombre'),
    phone: Yup.string()
      .required('Se requiere el teléfono')
      .min(7, 'El teléfono debe tener minimo 7 caracteres!')
      .max(10, 'El número de teléfono es muy Largo!'),
    email: Yup.string().email('Invalid email').required('Se requiere el correo')
  });

  useEffect(() => {
    document.body.classList.add('contact-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('contact-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);
  return (
    <>
      <WorkWithUsHeader />
      <div className="main">
        <div className="contact-content">
          <Container>
            <div className={styles.Title}>
              <h2 className="title">Quiero que vendamos mis productos!</h2>
            </div>
            <div className={styles.Description}>
              <p className="description">
                Te gustaria trabajar con PaLante, ingresa tu información y
                nosotros analizaremos y te daremos una respuesta lo más rapido
                posible.
                <br></br>
              </p>
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: ''
              }}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
              validationSchema={ValidationSchema}
            >
              {({ values, errors, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="ml-auto mr-auto" md="12">
                      <label>Nombre</label>
                      <InputGroup
                        className={
                          nameFocus
                            ? `input-group-focus ${styles.FormField}`
                            : `${styles.FormField}`
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          aria-label="Nombre..."
                          value={values.name}
                          autoComplete="name"
                          name="name"
                          placeholder="Nombre..."
                          type="text"
                          onFocus={() => setNameFocus(true)}
                          onBlur={() => setNameFocus(false)}
                          onChange={handleChange}
                        ></Input>
                      </InputGroup>
                      <label>Correo</label>
                      <InputGroup
                        className={
                          emailFocus
                            ? `input-group-focus ${styles.FormField}`
                            : `${styles.FormField}`
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          aria-label="Correo..."
                          autoComplete="email"
                          placeholder="Correo ..."
                          name="email"
                          type="email"
                          value={values.email}
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                          onChange={handleChange}
                        ></Input>
                      </InputGroup>
                      <label>Telefono</label>
                      <InputGroup
                        className={
                          numberFocus
                            ? `input-group-focus ${styles.FormField}`
                            : `${styles.FormField}`
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons tech_mobile"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="phone"
                          value={values.phone}
                          name="phone"
                          placeholder="Teléfono..."
                          type="text"
                          onFocus={() => setNumberFocus(true)}
                          onBlur={() => setNumberFocus(false)}
                          onChange={handleChange}
                        ></Input>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="submit text-center">
                        <Button
                          className={`btn-raised btn-round ${styles.boton}`}
                          color="primary"
                          defaultValue="Contact Us"
                          type="submit"
                          onClick={() => {
                            if (
                              values.email == '' ||
                              values.name == '' ||
                              values.phone == '' ||
                              errors.phone
                            ) {
                              addNotification({
                                message: `${
                                  errors.name || errors.phone || errors.email
                                }`,
                                type: 'danger'
                              });
                            }
                          }}
                        >
                          Contactanos
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </>
  );
}
