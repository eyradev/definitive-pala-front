import { object, SchemaOf, string } from 'yup';
import { Address } from '../models/sellOrder';

export const addressSchema: SchemaOf<Address> = object().shape({
  region: string().required('Se debe seleccionar una región'),
  city: string().required('Se debe seleccionar una ciudad'),
  address: string()
    .required('Se debe ingresar una dirección')
    .max(100, 'La dirección debe contener menos de 100 caracteres'),
  additionalInfo: string().max(
    250,
    'La información adicional debe contener menos de 250 caracteres'
  )
});
