import { useQuery } from "@apollo/client";
import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import Select from "react-select";
import { Button, FormGroup, FormText, Input, Spinner } from "reactstrap";
import useAddress from "../../../../hooks/useAddress";
import useUserPP from "../../../../hooks/useUserPP";
import { Address } from "../../../../models/sellOrder";
import { ALL_REGIONS } from "../../../../queries/regions";
import { ALL_REGIONS_QUERY } from "../../../../queries/__generated__/ALL_REGIONS_QUERY";
import { addressSchema } from "../../../../schemas/address";
import { Option } from "../../../../util/ts-types";

interface RegionOption extends Option {
  cityOptions?: Option[];
}

interface Props {
  onAddressCreated?: () => void;
}

export default function AddressCreationForm({
  onAddressCreated,
}: Props): JSX.Element | null {
  const [selectedRegion, setRegion] = useState<RegionOption | null>(null);
  const [selectedCity, setCity] = useState<Option | null>(null);
  const { user } = useUserPP();

  const { data: regions } = useQuery<ALL_REGIONS_QUERY>(ALL_REGIONS);
  const regionOptions = regions?.allRegions?.reduce<RegionOption[]>(
    (acc, region) => {
      region &&
        acc.push({
          value: region.id,
          label: region.name || "",
          cityOptions: region.cities.reduce<Option[]>((cityOptions, city) => {
            city &&
              cityOptions.push({ label: city.name || "", value: city.id });
            return cityOptions;
          }, []),
        });
      return acc;
    },
    []
  );

  const cityOptions: Option[] = [
    {
      value: "",
      label: "Single Option",
      isDisabled: true,
    },
  ];

  if (selectedRegion?.cityOptions && selectedRegion.cityOptions.length > 0) {
    cityOptions.push(...selectedRegion.cityOptions);
  }

  const { addAddress, addAddressData } = useAddress();

  const handleSubmit = async (
    values: Address,
    { resetForm }: FormikHelpers<Address>
  ) => {
    if (!addAddress || !addAddressData || addAddressData.loading) return;
    await addAddress({
      addresL1: values.address,
      cityId: values.city,
      description: values.additionalInfo,
    });
    resetForm();
    setRegion(null);
    setCity(null);
    onAddressCreated && onAddressCreated();
  };

  if (!regionOptions) return null;

  return (
    <Formik<Address>
      initialValues={{ region: "", city: "", address: "", additionalInfo: "" }}
      validationSchema={addressSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <FormGroup>
            <label
              htmlFor="region"
              style={{ color: errors.region ? "var(--danger)" : undefined }}
            >
              Departamento
            </label>
            <Select
              instanceId="region"
              id="region"
              name="region"
              className="react-select react-select-info mt-2"
              onChange={(region: RegionOption | null) => {
                if (region?.value === selectedRegion?.value) return;
                setRegion(region as RegionOption);
                setFieldValue("region", region?.value);
              }}
              classNamePrefix="react-select"
              placeholder="Departamento"
              value={selectedRegion}
              options={[
                {
                  value: "",
                  label: "Seleccionar Departamento",
                  isDisabled: true,
                },
                ...regionOptions,
              ]}
              styles={
                touched.region && errors.region
                  ? {
                      singleValue: (base) => ({
                        ...base,
                        color: "red !important",
                      }),
                    }
                  : undefined
              }
            />
            {touched.region && errors.region && (
              <FormText className="text-muted" color="danger" id="regionErr">
                {errors.region}
              </FormText>
            )}
          </FormGroup>
          <FormGroup>
            <label
              htmlFor="city"
              style={{
                color:
                  touched.city && errors.city ? "var(--danger)" : undefined,
              }}
            >
              Ciudad
            </label>
            <Select
              instanceId="city"
              id="city"
              className="react-select react-select-info mt-2"
              onChange={(city) => {
                if (selectedCity?.value === city?.value) return;
                setCity(city);
                setFieldValue("city", city?.value);
              }}
              classNamePrefix="react-select"
              placeholder="Seleccionar Ciudad"
              value={selectedCity}
              name=""
              options={cityOptions}
              styles={
                touched.city && errors.city
                  ? {
                      singleValue: (base) => ({
                        ...base,
                        color: "red !important",
                      }),
                    }
                  : undefined
              }
            />
            {touched.city && errors.city && (
              <FormText className="text-muted" color="danger" id="cityErr">
                {errors.city}
              </FormText>
            )}
          </FormGroup>
          <FormGroup>
            <label
              htmlFor="address"
              style={{
                color:
                  touched.address && errors.address
                    ? "var(--danger)"
                    : undefined,
              }}
            >
              Dirección
            </label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="tu dirección"
              onChange={handleChange}
              value={values.address}
              style={
                touched.address && errors.address
                  ? { color: "var(--danger)" }
                  : undefined
              }
            />
            {touched.address && errors.address && (
              <FormText className="text-muted" color="danger" id="addressErr">
                {errors.address}
              </FormText>
            )}
          </FormGroup>
          <FormGroup>
            <label
              htmlFor="extraInfo"
              style={
                touched.additionalInfo && errors.additionalInfo
                  ? { color: "var(--danger)" }
                  : undefined
              }
            >
              Información Adicional
            </label>
            <Input
              type="textarea"
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Agrega más indicaciones ..."
              value={values.additionalInfo}
              onChange={handleChange}
              style={
                touched.additionalInfo && errors.additionalInfo
                  ? { color: "var(--danger)" }
                  : undefined
              }
            />
            {touched.additionalInfo && errors.additionalInfo && (
              <FormText
                className="text-muted"
                color="danger"
                id="additionalInfoErr"
              >
                {errors.additionalInfo}
              </FormText>
            )}
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            disabled={!addAddressData || addAddressData.loading}
          >
            Crear Dirección{" "}
            {!addAddressData ||
              (addAddressData.loading && <Spinner color="white" size="sm" />)}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
