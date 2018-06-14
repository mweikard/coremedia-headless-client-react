// @flow
const capitalize = (value: string): string =>
  value.length ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

export default capitalize;
