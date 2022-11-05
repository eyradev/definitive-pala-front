import RegionSelect from "components/location/RegionSelect/RegionSelect";
import { Form, useFormikContext } from "formik";
import { Button, FormGroup } from "reactstrap";

export interface CreateUserAddressInput {
  addressL1: string;
  description: string;
  cityId: string;
  regionId: string;
}

const CreateUserAddressForm: React.FC = () => {
  const { values, errors, touched, setFieldValue, handleChange, handleBlur } =
    useFormikContext<CreateUserAddressInput>();

  return (
    <Form>
      <FormGroup>
        <label
          htmlFor="regionId"
          style={{
            color:
              touched.regionId && errors.regionId ? "var(--danger)" : undefined,
            margin: 0,
          }}
        >
          Departamento
        </label>
        <RegionSelect
          id="regionId"
          name="regionId"
          instanceId="regionId"
          placeholder="Departamento"
          onBlur={handleBlur}
          onChange={(option) => {
            if (!option?.value || values.regionId === option?.value) return;
            setFieldValue("regionId", option.value);
            console.log(option);
          }}
        />
      </FormGroup>
      <Button type="submit" color="info">
        Crear Dirección
      </Button>
    </Form>
  );
};

export default CreateUserAddressForm;
