import { useQuery } from '@apollo/client';
import { useFormikContext } from 'formik';
import React from 'react';
import { CardBody, FormGroup, Input, Label } from 'reactstrap';
import { GET_ALL_ILLNESSES } from '../../../../queries/category';
import { ALL_ILLNESSES } from '../../../../queries/__generated__/ALL_ILLNESSES';
import { ProductSearchFilter } from '../SearchFilter';

export default function Illnesses(): JSX.Element | null {
  const { values, handleChange } = useFormikContext<ProductSearchFilter>();

  const { data: illnesses } = useQuery<ALL_ILLNESSES>(GET_ALL_ILLNESSES);

  if (!illnesses?.allCategories) return null;

  return (
    <CardBody>
      {illnesses.allCategories.map((illness) => {
        if (illness && illness.id) {
          return (
            <FormGroup check key={illness.id}>
              <Label check>
                <Input
                  checked={values.illnesses.includes(illness.id)}
                  name="illnesses"
                  value={illness.id}
                  type="checkbox"
                  onChange={handleChange}
                />
                <span className="form-check-sign" />
                {illness.name}
              </Label>
            </FormGroup>
          );
        }
        return null;
      })}
    </CardBody>
  );
}
