import { useQuery } from '@apollo/client';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// reactstrap components
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row
} from 'reactstrap';
import * as Yup from 'yup';
import useUserPP from '../../../hooks/useUserPP';
import {
  GET_ALL_ILLNESSES,
  GET_ALL_PREFERENCES
} from '../../../queries/category';
import { ALL_ILLNESSES } from '../../../queries/__generated__/ALL_ILLNESSES';
import { ALL_PREFERENCES } from '../../../queries/__generated__/ALL_PREFERENCES';
import SignUpHeader from '../Headers/SignUpHeader/SignUpHeader';
import styles from './PersonalInfo.module.css';

export interface UserFormProps {
  phone: string;
  name: string;
  lastName: string;
  email: string;
  categories: string[];
  docType: string;
  docNumber: string;
}

function PersonalInfo(): JSX.Element {
  const [nameFocus, setNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [docTypeFocus, setDocTypeFocus] = useState(false);
  const [docNumFocus, setDocNumFocus] = useState(false);
  const router = useRouter();
  const { user, updateUser } = useUserPP();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [router, user]);

  const { data: illness } = useQuery<ALL_ILLNESSES>(GET_ALL_ILLNESSES);
  const { data: preferences } = useQuery<ALL_PREFERENCES>(GET_ALL_PREFERENCES);

  const handleSubmit = async (values: UserFormProps) => {
    if (!updateUser) return;

    await updateUser({
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      identification: values.docNumber,
      identificationType: values.docType,
      categories: values.categories,
      phone: values.phone
    });
  };

  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere el nombre'),
    phone: Yup.string()
      .required('Se requiere el teléfono')
      .min(7, 'El teléfono debe tener minimo 7 caracteres!')
      .max(10, 'El número de teléfono es muy Largo!'),
    email: Yup.string()
      .email('Invalid email')
      .required('Se requiere el correo'),
    docNumber: Yup.string()
      .required('Se requiere el número de documento')
      .min(7, 'El número de documento debe tener minimo 7 caracteres!')
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
      <SignUpHeader />
      <div className="main">
        <div className="contact-content">
          <Container>
            <h2 className="title text-center">Información Personal</h2>
            <p className="description">
              Porfavor rellena los siguientes datos, para concerte mejor y que
              puedas tener una mejor experiencia navegando en Palante <br></br>
              <br></br>
            </p>
            <Formik
              initialValues={{
                email: `${user?.email}`,
                name: `${user?.name}`,
                lastName: `${user?.lastName}`,
                phone: `${user?.phone}`,
                docType: `${user?.identificationType}`,
                docNumber: `${user?.identification}`,
                categories:
                  user?.category?.map((category: any) => category.id) || []
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
                      <label>Nombre</label>
                      <InputGroup
                        className={nameFocus ? 'input-group-focus' : ''}
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
                      <label className={styles.formato}>Apellidos</label>
                      <InputGroup
                        className={lastNameFocus ? 'input-group-focus' : ''}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="fullname"
                          placeholder="Apellidos..."
                          value={values.lastName}
                          type="text"
                          name="lastName"
                          onFocus={() => setLastNameFocus(true)}
                          onBlur={() => setLastNameFocus(false)}
                          onChange={handleChange}
                        ></Input>
                      </InputGroup>
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
                      <label className={styles.formato}>Afecciones</label>
                      {illness?.allCategories?.map((preference) => {
                        if (preference && preference.id) {
                          return (
                            <FormGroup check key={preference.id}>
                              <Label check>
                                <Input
                                  checked={values.categories.includes(
                                    preference.id
                                  )}
                                  name="categories"
                                  value={preference.id}
                                  type="checkbox"
                                  onChange={handleChange}
                                />
                                <span className="form-check-sign" />
                                {preference.name}
                              </Label>
                            </FormGroup>
                          );
                        }
                        return null;
                      })}
                    </Col>
                    <Col className="ml-auto mr-auto" md="5">
                      <label className={styles.formato2}>Teléfono</label>
                      <InputGroup
                        className={numberFocus ? 'input-group-focus' : ''}
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
                      <label className={styles.formato}>
                        Tipo de Documento
                      </label>
                      <InputGroup
                        className={docTypeFocus ? 'input-group-focus' : ''}
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
                      <label className={styles.formato}>
                        Número de Documento
                      </label>
                      <InputGroup
                        className={docNumFocus ? 'input-group-focus' : ''}
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
                      <label className={styles.formato}>Preferencias</label>
                      {preferences?.allCategories?.map((preference) => {
                        if (preference && preference.id) {
                          return (
                            <FormGroup check key={preference.id}>
                              <Label check>
                                <Input
                                  checked={values.categories.includes(
                                    preference.id
                                  )}
                                  onChange={handleChange}
                                  name="categories"
                                  value={preference.id}
                                  type="checkbox"
                                />
                                <span className="form-check-sign" />
                                {preference.name}
                              </Label>
                            </FormGroup>
                          );
                        }
                        return null;
                      })}
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
                        Finalizar
                      </Button>
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

export default PersonalInfo;
