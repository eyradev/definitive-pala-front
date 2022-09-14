import { object, SchemaOf, string } from 'yup';
import { Coupon } from '../models/coupon';

export const couponSchema: SchemaOf<Coupon> = object().shape({
  code: string()
    .required('se debe ingresar un código de cupón')
    .max(10, 'un cupón no debe tener más de 10 caracteres')
    .min(3, 'un cupón debe tener 3 o más caracteres')
});
