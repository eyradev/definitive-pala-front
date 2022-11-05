import { Loading } from "components/UI";
import { useRegionsQuery } from "graphql/regions/regions.query";
import Select, { Props } from "react-select";
import { Option } from "react-select/src/filters";

const RegionSelect: React.FC<Props> = ({ ...props }) => {
  const { data, error, loading } = useRegionsQuery();

  if (loading) return <Loading />;
  if (error) return null;

  const regionOptions = data?.allRegions?.reduce<Option[]>(
    (options, region) => {
      if (region?.name) {
        options.push({
          data: region.id,
          label: region.name,
          value: region.id,
        });
      }
      return options;
    },
    []
  );

  if (!regionOptions) return null;

  const className =
    (props.className ?? "") + "react-select react-select-info mt-2";
  const classNamePrefix = (props.classNamePrefix ?? "") + "react-select";
  return (
    <Select
      {...props}
      className={className}
      classNamePrefix={classNamePrefix}
      options={[
        ...(props.options ?? []),
        {
          value: "",
          label: "Seleccionar Departamento",
          isDisabled: true,
        },
        ...regionOptions,
      ]}
    />
  );
};

export default RegionSelect;
