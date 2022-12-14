/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getMaxBetween = (
  min: number,
  max: number,
  val: number
): number => {
  return Math.max(Math.min(max, val), min);
};

export const getMinBetween = (
  min: number,
  max: number,
  val: number
): number => {
  return Math.min(Math.max(min, val), max);
};

export const roundNumber = (num: number, scale: number) => {
  let scaleMulti = 10;
  for (let i = 1; i < scale; i++) {
    scaleMulti *= 10;
  }

  return Math.round((num + Number.EPSILON) * scaleMulti) / scaleMulti;
};
