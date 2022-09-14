import { useMutation, useQuery } from '@apollo/client';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row
} from 'reactstrap';
import * as Yup from 'yup';
import { CategoryWhereUniqueInput } from '../../../../__generated__/globalTypes';
import useNotification from '../../../hooks/useNotification';
import useUserPP from '../../../hooks/useUserPP';
import {
  GET_ALL_ILLNESSES,
  GET_ALL_PREFERENCES
} from '../../../queries/category';
import { REQUEST_RESET_MUTATION } from '../../../queries/requestReset';
import { CURRENT_USER_QUERY } from '../../../queries/user';
import { UPDATE_USER_MUTATION } from '../../../queries/userUpdate';
import { ALL_ILLNESSES } from '../../../queries/__generated__/ALL_ILLNESSES';
import { ALL_PREFERENCES } from '../../../queries/__generated__/ALL_PREFERENCES';
import {
  REQUEST_RESET,
  REQUEST_RESETVariables
} from '../../../queries/__generated__/REQUEST_RESET';
import {
  UPDATE_USER,
  UPDATE_USERVariables
} from '../../../queries/__generated__/UPDATE_USER';
import ProfilePageHeader from '../Headers/ProfileHeader/ProfileHeader';
import styles from './Profile.module.css';

export interface RequestProps {
  email: any;
}

export interface UserProps {
  email: string;
  password: string;
}

export interface UserFormProps {
  phone: string;
  name: string;
  lastName: string;
  address: string;
  addressDetails: string;
  email: string;
  categories: string[];
  docType: string;
  docNumber: string;
}

function ProfilePage(): JSX.Element {
  const [nameFocus, setNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [addressDetailFocus, setAddressDetailFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [docTypeFocus, setDocTypeFocus] = useState(false);
  const [docNumFocus, setDocNumFocus] = useState(false);
  const { addNotification } = useNotification();
  const router = useRouter();
  const { user } = useUserPP();

  const [requestReset] = useMutation<REQUEST_RESET, REQUEST_RESETVariables>(
    REQUEST_RESET_MUTATION
  );

  const { data: illness } = useQuery<ALL_ILLNESSES>(GET_ALL_ILLNESSES);
  const { data: preferences } = useQuery<ALL_PREFERENCES>(GET_ALL_PREFERENCES);

  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Se requiere el nombre'),
    address: Yup.string().required('Se requiere la dirección'),
    addressDetails: Yup.string().required(
      'Se requiere los detalles de la dirección'
    ),
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

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  const [updateUser] = useMutation<UPDATE_USER, UPDATE_USERVariables>(
    UPDATE_USER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    }
  );

  const requestPasswordReset = async (email: any) => {
    await requestReset({
      variables: {
        email: email
      }
    }).then(() => {
      addNotification({
        message:
          'El correo para el cambio de contraseña ha sido enviado exitosamente',
        type: 'success'
      });
    });
  };

  const handleSubmit = async (values: UserFormProps) => {
    if (user?.address[0].addressL1 === values.address) {
      const addressId = user.address[0].id;
      handleUserUpdate(values, addressId);
    }
  };

  async function handleUserUpdate(values: UserFormProps, addressId: string) {
    if (!user) return;
    if (!user.category) return;

    const disconnect = user?.category.reduce<CategoryWhereUniqueInput[]>(
      (acc: any, curr: any) => {
        if (curr && !values.categories.includes(curr.id)) {
          acc.push({ id: curr.id });
        }
        return acc;
      },
      []
    );

    const connect = values.categories.reduce<CategoryWhereUniqueInput[]>(
      (acc, curr) => {
        const val = user?.category?.find((category: any) => {
          return category.id === curr;
        });
        if (curr && !val) {
          acc.push({ id: curr });
        }
        return acc;
      },
      []
    );

    const AddressId = [{ id: addressId }];
    await updateUser({
      variables: {
        id: user.id,
        Categoryconnect: connect,
        Categorydisconnect: disconnect,
        email: values.email,
        firstName: values.name,
        lastName: values.lastName,
        phone: values.phone,
        Addressconnect: AddressId,
        docType: values.docType,
        docNumber: values.docNumber
      }
    }).then(() => {
      addNotification({
        message: 'Usuario modificado exitosamente',
        type: 'success'
      });
      setTimeout(() => {
        router.push('/profile');
      }, 1000);
    });
  }

  return (
    <>
      <ProfilePageHeader />
      <div className="section">
        <Container>
          <div className={styles.Title}>
            <h3 className="title">Mi Perfil</h3>
          </div>
          <Formik
            initialValues={{
              email: `${user?.email}`,
              address: `${user?.address[0].addressL1}`,
              name: `${user?.name}`,
              lastName: `${user?.lastName}`,
              phone: `${user?.phone}`,
              addressDetails: `${user?.address[0].description}`,
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
            {({ values, errors, touched, handleChange, handleSubmit }) => (
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
                    <label className={styles.formato}>Dirección</label>
                    <InputGroup
                      className={addressFocus ? 'input-group-focus' : ''}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_map-big"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Dirección..."
                        placeholder="Dirección..."
                        name="address"
                        value={values.address}
                        type="text"
                        onFocus={() => setAddressFocus(true)}
                        onBlur={() => setAddressFocus(false)}
                        onChange={handleChange}
                      ></Input>
                    </InputGroup>
                    <label className={styles.formato}>
                      Detalles de la Dirección
                    </label>
                    <InputGroup
                      className={addressDetailFocus ? 'input-group-focus' : ''}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_map-big"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Ejemplo: Timbre en la puerta roja"
                        name="addressDetails"
                        value={values.addressDetails}
                        type="text"
                        bsSize="lg"
                        onFocus={() => setAddressDetailFocus(true)}
                        onBlur={() => setAddressDetailFocus(false)}
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
                    <label className={styles.formato}>Tipo de Documento</label>
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
                    <Button
                      className={`btn-raised btn-round ${styles.boton}`}
                      type="button"
                      color="primary"
                      style={{
                        marginTop: '40px'
                      }}
                      onClick={() => {
                        requestPasswordReset(`${user?.email}`);
                      }}
                    >
                      Cambiar mi contraseña
                    </Button>
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
                        marginTop: '60px'
                      }}
                      onClick={() => {
                        if (
                          values.email == '' ||
                          values.address == '' ||
                          values.name == '' ||
                          values.phone == '' ||
                          values.docNumber == '' ||
                          errors.docNumber ||
                          errors.phone ||
                          errors.addressDetails
                        ) {
                          addNotification({
                            message: `${
                              errors.name ||
                              errors.phone ||
                              errors.email ||
                              errors.address ||
                              errors.addressDetails ||
                              errors.docNumber
                            }`,
                            type: 'danger'
                          });
                        }
                      }}
                    >
                      Realizar Cambios
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

export default ProfilePage;
