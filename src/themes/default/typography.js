// @flow
import { rem, em } from 'polished';

import type { PaletteOutput, BreakpointsOutput } from '../../types';

const fontFamilyHeading = [
  '"Core Light"',
  '"Simplon Norm Regular"',
  '"Lucida Sans"',
  '"Lucida Sans Unicode"',
  '"Lucida Grande"',
  'Arial',
  'Helvetica',
  'sans-serif',
].join(',');
const fontFamilyBase = [
  '"Simplon Norm Light"',
  '"Lucida Sans"',
  '"Lucida Sans Unicode"',
  '"Lucida Grande"',
  'Arial',
  'Helvetica',
  'sans-serif',
].join(',');

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const htmlFontSize = 16;

const typography = (palette: PaletteOutput, breakpoints: BreakpointsOutput): Object => ({
  fontFamily: fontFamilyBase,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  htmlFontSize,
  title1: {
    fontFamily: fontFamilyHeading,
    fontSize: rem(22, htmlFontSize),
    fontWeight: fontWeightLight,
    textTransform: 'uppercase',
    lineHeight: em(43, 34),
    [breakpoints.min('sm')]: {
      fontSize: rem(34, htmlFontSize),
    },
  },
  title2: {
    fontFamily: fontFamilyHeading,
    fontSize: rem(22, htmlFontSize),
    fontWeight: fontWeightLight,
    textTransform: 'uppercase',
    lineHeight: em(34, 30),
    [breakpoints.min('sm')]: {
      fontSize: rem(30, htmlFontSize),
    },
  },
  title3: {
    fontFamily: fontFamilyHeading,
    fontSize: rem(22, htmlFontSize),
    fontWeight: fontWeightLight,
    textTransform: 'uppercase',
    lineHeight: em(30, 26),
    [breakpoints.min('sm')]: {
      fontSize: rem(26, htmlFontSize),
    },
  },
  title4: {
    fontFamily: fontFamilyHeading,
    fontSize: rem(22, htmlFontSize),
    fontWeight: fontWeightRegular,
    textTransform: 'uppercase',
    lineHeight: em(29, 23),
    [breakpoints.min('sm')]: {
      fontSize: rem(23, htmlFontSize),
    },
  },
  title5: {
    fontFamily: fontFamilyBase,
    fontSize: rem(20, htmlFontSize),
    fontWeight: fontWeightRegular,
    lineHeight: em(26, 20),
  },
  title6: {
    fontFamily: fontFamilyBase,
    fontSize: rem(16, htmlFontSize),
    fontWeight: fontWeightRegular,
    lineHeight: em(23, 18),
    [breakpoints.min('sm')]: {
      fontSize: rem(18, htmlFontSize),
    },
  },
  body1: {
    fontFamily: fontFamilyBase,
    fontSize: rem(16, htmlFontSize),
    fontWeight: fontWeightRegular,
    lineHeight: em(21, 16),
  },
  body2: {
    fontFamily: fontFamilyBase,
    fontSize: rem(14, htmlFontSize),
    fontWeight: fontWeightRegular,
    lineHeight: em(18, 14),
  },
  button: {
    fontFamily: fontFamilyBase,
    fontSize: rem(16, htmlFontSize),
    fontWeight: fontWeightMedium,
    textTransform: 'none',
  },
  caption: {
    fontFamily: fontFamilyBase,
    fontSize: rem(12, htmlFontSize),
    fontWeight: fontWeightRegular,
    textTransform: 'none',
    lineHeight: em(16, 12),
    color: palette.background.textSecondary,
  },
});

export default typography;
