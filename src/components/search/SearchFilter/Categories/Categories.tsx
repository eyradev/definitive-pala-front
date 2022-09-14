import { useQuery } from '@apollo/client';
import { useFormikContext } from 'formik';
import React from 'react';
import { CardBody, FormGroup, Input, Label } from 'reactstrap';
import { GET_ALL_PREFERENCES } from '../../../../queries/category';
import { ALL_PREFERENCES } from '../../../../queries/__generated__/ALL_PREFERENCES';
import { ProductSearchFilter } from '../SearchFilter';

export default function Categories(): JSX.Element | null {
  const { values, handleChange } = useFormikContext<ProductSearchFilter>();

  const { data: preferences } = useQuery<ALL_PREFERENCES>(GET_ALL_PREFERENCES);

  if (!preferences?.allCategories) return null;

  return (
    <CardBody>
      {preferences.allCategories.map((preference) => {
        if (preference && preference.id) {
          return (
            <FormGroup check key={preference.id}>
              <Label check>
                <Input
                  checked={values.categories.includes(preference.id)}
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
    </CardBody>
  );
}
