import ReactSlider from "react-slider";
import styles from "./slider.module.css";

const Slider2: React.FC = () => {
  return (
    <ReactSlider
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      defaultValue={[0, 100]}
      step={1}
      ariaLabel={["Lower thumb", "Upper thumb"]}
      ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      renderThumb={(props, state) => (
        <div {...props}>
          <div className={styles.selector} />
          <div className={styles["value-wrapper"]}>{state.valueNow}</div>
        </div>
      )}
      renderTrack={(props, state) => (
        <div
          {...props}
          style={{
            ...props.style,
            background: state.index === 1 ? "gray" : props.style?.background,
          }}
        />
      )}
      pearling
      minDistance={10}
    />
  );
};

export default Slider2;
