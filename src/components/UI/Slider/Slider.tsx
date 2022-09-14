import Slider from 'nouislider';
import { useEffect } from 'react';

interface Props {
  id: string;
  name?: string;
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  step?: number;
  onUpdate?: (values: (string | number)[]) => void;
}

export default function CaloriesSelector({
  id,
  name,
  min,
  max,
  currentMin,
  currentMax,
  step,
  onUpdate
}: Props): JSX.Element {
  useEffect(() => {
    const slider = document.getElementById(id);
    if (!slider || slider.classList.contains('noUi-target')) return;
    const newSlider = Slider.create(slider, {
      start: [currentMin, currentMax],
      connect: [false, true, false],
      step: step || 1,
      range: { min, max }
    });

    if (onUpdate) {
      newSlider.on('update', onUpdate);
    }
  }, []);

  return (
    <>
      {name && (
        <div>
          <p>{name}</p>
        </div>
      )}
      <div>
        <span className="price-left pull-left" id="price-left">
          {currentMin}
        </span>
        <span className="price-right pull-right" id="price-right">
          {currentMax}
        </span>
        <div className="clearfix" />
        <div className="slider slider-refine" id={id} />
      </div>
    </>
  );
}
