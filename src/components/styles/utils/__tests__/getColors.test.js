// @flow
import getColors from '../getColors';

describe('getColors()', () => {
  const colors = {
    primary: 'PRIMARY',
    secondary: 'SECONDARY',
    common: {
      white: '#FFF',
    },
    additional: {
      blue: 'BLUE',
      red: 'RED',
    },
  };

  it(`should return matching value`, () => {
    const label = 'primary';
    const expected = colors[label];
    const result = getColors(colors, label);
    expect(result).toEqual(expected);
  });
  it(`should return matching value`, () => {
    const label = 'secondary';
    const expected = colors[label];
    const result = getColors(colors, label);
    expect(result).toEqual(expected);
  });
  it(`should return matching value`, () => {
    const label = 'red';
    const expected = colors.additional[label];
    const result = getColors(colors, label);
    expect(result).toEqual(expected);
  });
  it(`should return matching value`, () => {
    const label = 'blue';
    const expected = colors.additional[label];
    const result = getColors(colors, label);
    expect(result).toEqual(expected);
  });
  it(`should return matching value`, () => {
    const label = 'white';
    const expected = colors.common[label];
    const result = getColors(colors, label);
    expect(result).toEqual(expected);
  });
  it(`should return default value`, () => {
    const label = undefined;
    const result = getColors(colors, label);
    expect(result).toEqual({ color: '#fff', text: '#000' });
  });
});
