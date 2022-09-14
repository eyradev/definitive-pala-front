/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import useUserPP from '../../../hooks/useUserPP';
import ProfilePageHeader from '../Headers/ProfileHeader/ProfileHeader';
import styles from './PasswordReset.module.css';

export interface RequestProps {
  email: string;
}

export interface UserProps {
  email: string;
  password: string;
}

export interface UserFormProps {
  password: string;
  email: string;
}

function PasswordReset(): JSX.Element {
  const [addressFocus, setAddressFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const { signout, passwordReset } = useUserPP();

  const router = useRouter();
  const { token } = router.query;

  const ProfileSchema = Yup.object().shape({
    password: Yup.string().required('Se requiere la contraseña'),

    email: Yup.string().email('Invalid email').required('Se requiere el correo')
  });

  useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    signout && signout();
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('profile-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  /* const [passwordReset, { data: resetData }] = useMutation<
    RESET,
    RESETVariables
  >(RESET_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  const handleSubmit = async (values: UserFormProps, token: any) => {
    await passwordReset({
      variables: {
        email: values.email,
        password: values.password,
        token: token
      }
    }).then(() => {
      if (resetData?.redeemUserPasswordResetToken?.code == 'FAILURE') {
        addNotification({
          message: `${resetData.redeemUserPasswordResetToken.message}`,
          type: 'danger'
        });
      }
      if (resetData?.redeemUserPasswordResetToken == null) {
        addNotification({
          message: 'Contraseña Cambiada Exitosamente',
          type: 'success'
        });
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      }
    });
  }; */

  const handleReset = async (values: { email: string; password: string }) => {
    if (!passwordReset) return;
    await passwordReset(values, token);
  };

  if (!token) {
    return (
      <div>
        <ProfilePageHeader />
        <div className="section">
          <div className={styles.Title}>
            <h3 className="title">Cambio de Contraseña</h3>
          </div>
          <p>Oops, parece que no necesitas un cambio de contraseña</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <ProfilePageHeader />
      <div className="section">
        <Container>
          <div className={styles.Title}>
            <h3 className="title">Cambio de Contraseña</h3>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={handleReset}
            validationSchema={ProfileSchema}
          >
            {({ values, handleChange, handleSubmit }) => (
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
                    <label className={styles.formato}>Contraseña</label>
                    <InputGroup
                      className={addressFocus ? 'input-group-focus' : ''}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Contraseña..."
                        placeholder="Contraseña..."
                        name="password"
                        value={values.password}
                        type="password"
                        onFocus={() => setAddressFocus(true)}
                        onBlur={() => setAddressFocus(false)}
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

export default PasswordReset;
