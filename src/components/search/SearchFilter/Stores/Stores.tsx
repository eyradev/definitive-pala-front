import { useQuery } from '@apollo/client';
import { useFormikContext } from 'formik';
import React from 'react';
import { CardBody, FormGroup, Input, Label } from 'reactstrap';
import { GET_ALL_STORES } from '../../../../queries/store';
import { ALL_STORES } from '../../../../queries/__generated__/ALL_STORES';
import { ProductSearchFilter } from '../SearchFilter';

export default function Stores(): JSX.Element | null {
  const { values, handleChange } = useFormikContext<ProductSearchFilter>();
  const { data: stores } = useQuery<ALL_STORES>(GET_ALL_STORES);

  if (!stores?.allStores) return null;

  return (
    <CardBody>
      {stores.allStores.map((store) => {
        if (store && store.id) {
          return (
            <FormGroup check key={store.id}>
              <Label check>
                <Input
                  checked={values.stores.includes(store.id)}
                  type="checkbox"
                  name="stores"
                  value={store.id}
                  onChange={handleChange}
                />
                <span className="form-check-sign" />
                {store.name}
              </Label>
            </FormGroup>
          );
        }
        return null;
      })}
    </CardBody>
  );
}
