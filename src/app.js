const MESSAGE = `The parameter must be a number.`;

const notANumber = value => typeof value !== 'number' ? MESSAGE : null;

const add = (...rest) => rest.reduce((acc, value) => {
  const isANumber = notANumber(acc) === null && notANumber(value) === null;
  return isANumber ? acc + value : notANumber(acc) || notANumber(value);
})

export const app = {
  MESSAGE,
  add,
  notANumber,
}