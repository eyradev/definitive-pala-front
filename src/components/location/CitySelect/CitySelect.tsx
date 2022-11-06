import { Loading } from "components/UI";
import { useCitiesQuery } from "graphql/cities/cities.query";
import Select, { Props } from "react-select";
import { Option } from "react-select/src/filters";

const CitySelect: React.FC<
  Props & {
    regionId?: string;
  }
> = ({ regionId, ...props }) => {
  const { data, error, loading } = useCitiesQuery({
    variables: { regionId },
    skip: !regionId,
  });

  if (loading) return <Loading />;
  if (error) return null;

  const cityOptions = data?.allCities?.reduce<Option[]>((options, city) => {
    if (city?.name) {
      options.push({
        data: city.id,
        label: city.name,
        value: city.id,
      });
    }
    return options;
  }, []);

  const className =
    (props.className ?? "") + "react-select react-select-info mt-2";
  const classNamePrefix = (props.classNamePrefix ?? "") + "react-select";

  return (
    <Select
      {...props}
      className={className}
      classNamePrefix={classNamePrefix}
      isDisabled={!regionId}
      options={[
        ...(props.options ?? []),
        {
          value: "",
          label: "Seleccionar Ciudad",
          isDisabled: true,
        },
        ...(cityOptions ?? []),
      ]}
    />
  );
};

export default CitySelect;
