import { useFormikContext } from "formik";
import Slider from "nouislider";
import { useEffect } from "react";
import { CardBody, FormGroup, Input, Label } from "reactstrap";
import { ProductSearchFilter } from "../SearchFilter";

interface Props {
  min: number;
  max: number;
}

export default function PriceRangeSelector({ min, max }: Props): JSX.Element {
  const {
    values: formValues,
    setFieldValue,
    handleChange,
  } = useFormikContext<ProductSearchFilter>();

  const onUpdate = (values: (string | number)[]) => {
    // setSliderMin(Math.round(values[0] as number));
    // setSliderMax(Math.round(values[1] as number));
    setFieldValue("priceRange.min", values[0], false);
    setFieldValue("priceRange.max", values[1], false);
  };

  useEffect(() => {
    if (
      !document
        .getElementById("sliderRefine")
        ?.classList.contains("noUi-target")
    ) {
      const slider = document.getElementById("sliderRefine");
      if (!slider) return;

      Slider.create(slider, {
        start: [formValues.priceRange.min, formValues.priceRange.max],
        connect: [false, true, false],
        step: 1000,
        range: { min, max },
      }).on("update", onUpdate);
    }
  });

  return (
    <CardBody>
      <div>
        <span className="price-left pull-left" id="price-left">
          ${Math.round(formValues.priceRange.min / 1000)}k
        </span>
        <span className="price-right pull-right" id="price-right">
          ${Math.round(formValues.priceRange.max / 1000)}k
        </span>
        <div className="clearfix" />
        <div className="slider slider-refine" id="sliderRefine" />
      </div>
      <br />
      <FormGroup check>
        <Label check>
          <Input
            checked={formValues.offersOnly}
            name="offersOnly"
            value="offersOnly"
            type="checkbox"
            onChange={handleChange}
          />
          <span className="form-check-sign" />
          Solo Ofertas
        </Label>
      </FormGroup>
    </CardBody>
  );
}
