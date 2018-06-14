// @flow
import capitalize from '../capitalize';

describe('capitalize()', () => {
  it('should return capitalized string', () => {
    const expected = 'Title';
    const result = capitalize('title');
    expect(result).toEqual(expected);
  });
  it('should return empty string', () => {
    const expected = '';
    const result = capitalize('');
    expect(result).toEqual(expected);
  });
});
