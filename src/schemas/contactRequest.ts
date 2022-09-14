import * as yup from 'yup';
import { ContactRequest } from '../models/contactRequest';

const minMessageLength = 8;
const maxMessageLength = 225;

export const ContactRequestSchema: yup.SchemaOf<ContactRequest> = yup.object().shape({
  type: yup.mixed<ContactRequest['type']>().oneOf(['P', 'Q', 'R', 'S', 'D', 'F'], 'Se debe seleccionar una opcion entre P, Q, R, S, D, F').required('Se debe especificar un tipo de petición'),
  name: yup.string().required('Se requiere un nombre para la petición'),
  email: yup.string().email('Formato incorrecto de correo').required('Se requiere un correo para la petición'),
  phone: yup.string().required('Se requiere un telefono para la petición'),
  message: yup.string().required('Se requiere un mensaje para la petición').min(minMessageLength, `El mensaje debe tener al menos ${minMessageLength} caracteres`).max(maxMessageLength, `El mensaje no debe tener más de ${maxMessageLength} caracteres`)
})