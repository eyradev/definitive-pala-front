import CitySelect from "components/location/CitySelect/CitySelect";
import RegionSelect from "components/location/RegionSelect/RegionSelect";
import { Form, useFormikContext } from "formik";
import { Button, FormGroup, FormText, Input, Spinner } from "reactstrap";

export interface CreateUserAddressInput {
  addressL1: string;
  description: string;
  cityId: string;
  regionId: string;
}

const CreateUserAddressForm: React.FC = () => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    isSubmitting,
  } = useFormikContext<CreateUserAddressInput>();

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
          }}
        />
        {touched.regionId && errors.regionId && (
          <FormText className="text-muted" color="danger">
            {errors.regionId}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          htmlFor="cityId"
          style={{
            color:
              touched.cityId && errors.cityId ? "var(--danger)" : undefined,
            margin: 0,
          }}
        >
          Ciudad
        </label>
        <CitySelect
          id="cityId"
          name="cityId"
          instanceId="cityId"
          regionId={values?.regionId}
          placeholder="Ciudad"
          onBlur={handleBlur}
          onChange={(option) => {
            if (!option?.value || values.cityId === option.value) return;
            setFieldValue("cityId", option.value);
          }}
        />
        {touched.cityId && errors.cityId && (
          <FormText className="text-muted" color="danger">
            {errors.cityId}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          htmlFor="address"
          style={{
            color:
              touched.addressL1 && errors.addressL1
                ? "var(--danger)"
                : undefined,
          }}
        >
          Dirección
        </label>
        <Input
          type="text"
          id="addressL1"
          name="addressL1"
          placeholder="Dirección"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.addressL1}
          style={
            touched.addressL1 && errors.addressL1
              ? { color: "var(--danger)" }
              : undefined
          }
        />
        {touched.addressL1 && errors.addressL1 && (
          <FormText className="text-muted" color="danger">
            {errors.addressL1}
          </FormText>
        )}
      </FormGroup>
      <FormGroup>
        <label
          htmlFor="description"
          style={{
            color:
              touched.description && errors.description
                ? "var(--danger)"
                : undefined,
          }}
        >
          Descripción
        </label>
        <Input
          type="textarea"
          id="description"
          name="description"
          placeholder="Agrega indicaciones adicionales como unidad, apartamento, detalles de tu puerta, etc"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.description}
          style={
            touched.description && errors.description
              ? { color: "var(--danger)" }
              : undefined
          }
        />
        {touched.description && errors.description && (
          <FormText className="text-muted" color="danger">
            {errors.description}
          </FormText>
        )}
      </FormGroup>
      <Button
        type="submit"
        color="primary"
        disabled={isSubmitting}
        style={{ display: "flex", alignItems: "center" }}
      >
        Crear Dirección
        {isSubmitting ? (
          <Spinner size="sm" type="grow" />
        ) : (
          <div style={{ width: 15, height: 15, display: "inline-block" }} />
        )}
      </Button>
    </Form>
  );
};

export default CreateUserAddressForm;
