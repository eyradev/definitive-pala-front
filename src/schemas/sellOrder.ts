import { boolean, object, SchemaOf, string } from 'yup';
import { SellOrder } from '../models/sellOrder';

export const sellOrderSchema: SchemaOf<SellOrder> = object().shape({
  acceptTerms: boolean()
    .required('Se deben aceptar los terminos y condiciones')
    .oneOf([true], 'Se deben aceptar los terminos y condiciones'),
  address: string().required('Se debe de seleccionar una dirección')
});
