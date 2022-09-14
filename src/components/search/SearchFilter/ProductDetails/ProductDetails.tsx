import { useFormikContext } from 'formik';
import { CardBody } from 'reactstrap';
import { Slider } from '../../../UI';
import { ProductSearchFilter } from '../SearchFilter';

interface Props {
  maxCalories: number;
  maxSodium: number;
}

export default function ProductDetails({
  maxCalories,
  maxSodium
}: Props): JSX.Element {
  const { values: formValues, setFieldValue } =
    useFormikContext<ProductSearchFilter>();

  const handleUpdate =
    (category: 'calories' | 'sodium') => (values: (string | number)[]) => {
      setFieldValue(`${category}.min`, values[0], false);
      setFieldValue(`${category}.max`, values[1], false);
    };

  return (
    <CardBody>
      <Slider
        id="caloriesSlider"
        name="Calorias (g)"
        min={0}
        max={maxCalories}
        currentMin={Math.round(formValues.calories.min)}
        currentMax={Math.round(formValues.calories.max)}
        step={10}
        onUpdate={handleUpdate('calories')}
      />
      <Slider
        id="sodiumSlider"
        name="Sodio (g)"
        min={0}
        max={maxSodium}
        currentMin={Math.round(formValues.sodium.min)}
        currentMax={Math.round(formValues.sodium.max)}
        step={10}
        onUpdate={handleUpdate('sodium')}
      />
    </CardBody>
  );
}
