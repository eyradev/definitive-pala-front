import { bool, object, SchemaOf, string } from 'yup';
import {
  UserPasswordResetInput,
  UserSignInInput,
  UserSignUpInput
} from './../models/user';

export const LoginSchema: SchemaOf<UserSignInInput> = object().shape({
  email: string().email('Correo Invalido').required('Se requiere el correo'),
  password: string().required('Se requiere la contraseña')
});

export const SignupSchema: SchemaOf<UserSignUpInput> = object().shape({
  firstName: string().required('Se requiere el nombre'),
  lastName: string().required('Se requieren los apellidos'),
  password: string()
    .min(8, 'La contraseña debe tener minimo 8 caracteres!')
    .max(50, 'Contraseña muy Larga!')
    .required('Se requiere la contraseña'),
  phone: string()
    .required('Se requiere el teléfono')
    .min(7, 'El teléfono debe tener minimo 7 caracteres!')
    .max(10, 'El número de teléfono es muy Largo!'),
  email: string().email('Invalid email').required('Se requiere el correo'),
  docNumber: string()
    .required('Se requiere el número de documento')
    .min(7, 'El número de documento debe tener minimo 7 caracteres!'),
  docType: string().required(),
  acceptTerms: bool().oneOf(
    [true],
    'Se requiere aceptar los términos y condiciones'
  )
});

export const PasswordResetSchema: SchemaOf<UserPasswordResetInput> =
  object().shape({
    password: string().required('Se requiere la contraseña'),
    email: string().email('Invalid email').required('Se requiere el correo')
  });
