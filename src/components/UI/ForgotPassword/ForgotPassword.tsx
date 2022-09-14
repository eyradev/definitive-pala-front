import { useMutation } from '@apollo/client';
import { Form, Formik } from 'formik';
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
import { REQUEST_RESET_MUTATION } from '../../../queries/requestReset';
import {
  REQUEST_RESET,
  REQUEST_RESETVariables
} from '../../../queries/__generated__/REQUEST_RESET';
import ProfilePageHeader from '../Headers/ProfileHeader/ProfileHeader';
import styles from './ForgotPassword.module.css';

export interface RequestProps {
  email: string;
}

export interface UserProps {
  email: string;
}

export interface UserFormProps {
  email: string;
}

function ForgotPassword(): JSX.Element {
  const [emailFocus, setEmailFocus] = useState(false);

  const { addNotification } = useNotification();

  const ProfileSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Se requiere el correo')
  });

  useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('profile-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  const [requestReset] = useMutation<REQUEST_RESET, REQUEST_RESETVariables>(
    REQUEST_RESET_MUTATION
  );

  const handleSubmit = async (values: UserFormProps) => {
    await requestReset({
      variables: {
        email: values.email
      }
    }).then(() => {
      addNotification({
        message:
          'El correo para el cambio de contraseña ha sido enviado exitosamente',
        type: 'success'
      });
    });
  };

  return (
    <>
      <ProfilePageHeader />
      <div className="section">
        <Container>
          <div className={styles.Title}>
            <h3 className="title">Olvide Mi contraseña</h3>
            <p className="description">
              Ingresa el correo con el que te registraste en Palante para
              realizar el cambio de la contraseña.
            </p>
          </div>
          <Formik
            initialValues={{
              email: ''
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={ProfileSchema}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col className="ml-auto mr-auto" md="5">
                    <label className={styles.formato}>Correo</label>

                    <InputGroup
                      className={emailFocus ? 'input-group-focus' : ''}
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
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-auto mr-auto" md="2">
                    <Button
                      className={`btn-raised btn-round ${styles.boton}`}
                      defaultValue="Contact Us"
                      type="submit"
                      color="primary"
                      style={{
                        marginTop: '40px'
                      }}
                      onClick={() => {
                        if (values.email == '') {
                          addNotification({
                            message: `${errors.email}`,
                            type: 'danger'
                          });
                        }
                      }}
                    >
                      Cambiar Contraseña
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
}

export default ForgotPassword;
