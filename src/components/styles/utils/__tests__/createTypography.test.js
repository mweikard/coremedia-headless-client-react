// @flow
import createTypography from '../createTypography';
import createPalette from '../createPalette';
import createBreakpoints from '../createBreakpoints';

describe('createTypography()', () => {
  const palette = createPalette({});
  const breakpoints = createBreakpoints({});
  it(`should return matching value using default parameter value`, () => {
    const result = createTypography(palette, breakpoints, {});
    expect(result).toMatchSnapshot();
  });
  it(`should return matching value using custom value (object)`, () => {
    const typography = {
      fontFamily: 'Verdana',
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightMedium: 700,
      htmlFontSize: 14,
    };
    const result = createTypography(palette, breakpoints, typography);
    expect(result).toMatchSnapshot();
  });
  it(`should return matching value using custom value (function)`, () => {
    const fontFamilyHeading = '"Comic Sans"';
    const fontFamilyBase = 'Georgia';
    const fontWeightLight = 200;
    const fontWeightRegular = 300;
    const fontWeightMedium = 700;
    const htmlFontSize = 14;
    const typography = (palette, breakpoints) => ({
      fontFamily: fontFamilyBase,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      htmlFontSize,
      title1: {
        fontFamily: fontFamilyHeading,
        fontSize: '22px',
        fontWeight: fontWeightLight,
        textTransform: 'uppercase',
        lineHeight: '1.6em',
        [breakpoints.min('sm')]: {
          fontSize: '34px',
        },
      },
      title2: {
        fontFamily: fontFamilyHeading,
        fontSize: '22px',
        fontWeight: fontWeightLight,
        textTransform: 'uppercase',
        lineHeight: '1.5em',
        [breakpoints.min('sm')]: {
          fontSize: '30px',
        },
      },
      title3: {
        fontFamily: fontFamilyHeading,
        fontSize: '22px',
        fontWeight: fontWeightLight,
        textTransform: 'uppercase',
        lineHeight: '1.4em',
        [breakpoints.min('sm')]: {
          fontSize: '26px',
        },
      },
      title4: {
        fontFamily: fontFamilyHeading,
        fontSize: '22px',
        fontWeight: fontWeightRegular,
        textTransform: 'uppercase',
        lineHeight: '1.3em',
        [breakpoints.min('sm')]: {
          fontSize: '23px',
        },
      },
      title5: {
        fontFamily: fontFamilyBase,
        fontSize: '20px',
        fontWeight: fontWeightRegular,
        lineHeight: '1.2em',
      },
      title6: {
        fontFamily: fontFamilyBase,
        fontSize: '16px',
        fontWeight: fontWeightRegular,
        lineHeight: '1.1em',
        [breakpoints.min('sm')]: {
          fontSize: '18px',
        },
      },
      body1: {
        fontFamily: fontFamilyBase,
        fontSize: '16px',
        fontWeight: fontWeightRegular,
        lineHeight: '1.5em',
      },
      body2: {
        fontFamily: fontFamilyBase,
        fontSize: '14px',
        fontWeight: fontWeightRegular,
        lineHeight: '1.4em',
      },
      button: {
        fontFamily: fontFamilyBase,
        fontSize: '16px',
        fontWeight: fontWeightMedium,
        textTransform: 'none',
      },
      caption: {
        fontFamily: fontFamilyBase,
        fontSize: '12px',
        fontWeight: fontWeightRegular,
        textTransform: 'none',
        lineHeight: '1.2em',
        color: palette.background.textSecondary,
      },
    });
    const result = createTypography(palette, breakpoints, typography);
    expect(result).toMatchSnapshot();
  });
});
