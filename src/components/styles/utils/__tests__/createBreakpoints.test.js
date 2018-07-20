// @flow
import createBreakpoints from '../createBreakpoints';

describe('createBreakpoints()', () => {
  it(`should return matching value using default parameter value`, () => {
    const result = createBreakpoints({});
    expect(result).toMatchInlineSnapshot(`
Object {
  "between": [Function],
  "exact": [Function],
  "keys": Array [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ],
  "max": [Function],
  "min": [Function],
  "values": Object {
    "lg": 1280,
    "md": 992,
    "sm": 768,
    "xl": 1920,
    "xs": 0,
  },
}
`);
    expect(result.min('sm')).toMatchInlineSnapshot(`"@media (min-width:48em)"`);
    expect(result.max('lg')).toMatchInlineSnapshot(`"@media (max-width:119.996875em)"`);
    expect(result.between('sm', 'lg')).toMatchInlineSnapshot(
      `"@media (min-width:48em) and (max-width:119.996875em)"`
    );
    expect(result.exact('md')).toMatchInlineSnapshot(
      `"@media (min-width:62em) and (max-width:79.996875em)"`
    );
  });
  it(`should return matching value using custom value`, () => {
    const breakpoints = {
      values: {
        xs: 0,
        sm: 100,
        md: 200,
        lg: 300,
        xl: 400,
      },
      step: 10,
    };
    const result = createBreakpoints(breakpoints);
    expect(result).toMatchInlineSnapshot(`
Object {
  "between": [Function],
  "exact": [Function],
  "keys": Array [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
  ],
  "max": [Function],
  "min": [Function],
  "values": Object {
    "lg": 300,
    "md": 200,
    "sm": 100,
    "xl": 400,
    "xs": 0,
  },
}
`);
    expect(result.min('sm')).toMatchInlineSnapshot(`"@media (min-width:6.25em)"`);
    expect(result.max('lg')).toMatchInlineSnapshot(`"@media (max-width:24.99375em)"`);
    expect(result.between('sm', 'lg')).toMatchInlineSnapshot(
      `"@media (min-width:6.25em) and (max-width:24.99375em)"`
    );
    expect(result.exact('md')).toMatchInlineSnapshot(
      `"@media (min-width:12.5em) and (max-width:18.74375em)"`
    );
  });
});
