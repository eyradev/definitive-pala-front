/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@apollo/client';
import { useFormikContext } from 'formik';
import { Button, Col, FormGroup, Input, Label } from 'reactstrap';
import useNotification from '../../../../hooks/useNotification';
import useUserPP from '../../../../hooks/useUserPP';
import {
  GET_ALL_ILLNESSES,
  GET_ALL_PREFERENCES
} from '../../../../queries/category';
import { REQUEST_RESET_MUTATION } from '../../../../queries/requestReset';
import { ALL_ILLNESSES } from '../../../../queries/__generated__/ALL_ILLNESSES';
import { ALL_PREFERENCES } from '../../../../queries/__generated__/ALL_PREFERENCES';
import {
  REQUEST_RESET,
  REQUEST_RESETVariables
} from '../../../../queries/__generated__/REQUEST_RESET';
import { UserFormProps } from '../Profile';

export default function Preferences(): JSX.Element {
  const { data: illness } = useQuery<ALL_ILLNESSES>(GET_ALL_ILLNESSES);
  const { data: preferences } = useQuery<ALL_PREFERENCES>(GET_ALL_PREFERENCES);
  const { values, handleChange } = useFormikContext<UserFormProps>();
  const { addNotification } = useNotification();
  const { user } = useUserPP();

  const [requestReset] = useMutation<REQUEST_RESET, REQUEST_RESETVariables>(
    REQUEST_RESET_MUTATION
  );

  async function handleRequestReset(values: any) {
    await requestReset({
      variables: {
        email: values
      }
    }).then(() => {
      addNotification({
        message: 'Se ha enviado un correo para el cambio de contraseña',
        type: 'success'
      });
    });
  }

  return (
    <>
      <Col className="ml-auto mr-auto" md="5">
        <label>Preferencias</label>
        {preferences?.allCategories?.map((preference) => {
          if (preference && preference.id) {
            return (
              <FormGroup check key={preference.id}>
                <Label check>
                  <Input
                    checked={values.categories.includes(preference.id)}
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
      </Col>
      <Col className="ml-auto mr-auto" md="5">
        <label>Afecciones</label>
        {illness?.allCategories?.map((preference) => {
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
        <Button
          className="btn-round"
          style={{ marginTop: '30px' }}
          onClick={() => {
            handleRequestReset(`${user?.email}`);
          }}
          size="l"
          color="primary"
        >
          Cambiar Contraseña
        </Button>
      </Col>
    </>
  );
}
