import { number, object, SchemaOf } from 'yup';
import { ProductStock } from '../models/product';

export const productStockSchema: SchemaOf<ProductStock> = object().shape({
  stock: number()
    .min(1, 'Se debe pedir almenos un producto')
    .required('Se requieren las unidades a pedir')
});
