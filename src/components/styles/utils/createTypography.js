// @flow
import { rem, em } from 'polished';
import merge from 'deepmerge';

import type {
  PaletteOutput,
  BreakpointsOutput,
  TypographyInput,
  TypographyOutput,
} from '../../../types';

const createTypography = (
  palette: PaletteOutput,
  breakpoints: BreakpointsOutput,
  typography: TypographyInput
): TypographyOutput => {
  const {
    fontFamily = 'Helvetica, Arial, sans-serif',
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    htmlFontSize = 16,
    ...rest
  } =
    typeof typography === 'function' ? typography(palette, breakpoints) : typography;

  return merge(
    {
      fontFamily,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      htmlFontSize,
      title1: {
        fontFamily: fontFamily,
        fontSize: rem(34, htmlFontSize),
        fontWeight: fontWeightLight,
        textTransform: 'uppercase',
        lineHeight: em(43, 34),
        color: palette.background.textSecondary,
      },
      title2: {
        fontFamily: fontFamily,
        fontSize: rem(30, htmlFontSize),
        fontWeight: fontWeightLight,
        textTransform: 'uppercase',
        lineHeight: em(34, 30),
        color: palette.background.textSecondary,
      },
      title3: {
        fontFamily: fontFamily,
        fontSize: rem(26, htmlFontSize),
        fontWeight: fontWeightLight,
        textTransform: 'uppercase',
        lineHeight: em(30, 26),
        color: palette.background.textSecondary,
      },
      title4: {
        fontFamily: fontFamily,
        fontSize: rem(23, htmlFontSize),
        fontWeight: fontWeightRegular,
        textTransform: 'uppercase',
        lineHeight: em(29, 23),
        color: palette.background.textSecondary,
      },
      title5: {
        fontFamily: fontFamily,
        fontSize: rem(20, htmlFontSize),
        fontWeight: fontWeightRegular,
        lineHeight: em(26, 20),
        color: palette.background.textPrimary,
      },
      title6: {
        fontFamily: fontFamily,
        fontSize: rem(18, htmlFontSize),
        fontWeight: fontWeightRegular,
        lineHeight: em(23, 18),
        color: palette.background.textPrimary,
      },
      body1: {
        fontFamily: fontFamily,
        fontSize: rem(16, htmlFontSize),
        fontWeight: fontWeightRegular,
        lineHeight: em(21, 16),
        color: palette.background.textPrimary,
      },
      body2: {
        fontFamily: fontFamily,
        fontSize: rem(14, htmlFontSize),
        fontWeight: fontWeightRegular,
        lineHeight: em(18, 14),
        color: palette.background.textPrimary,
      },
      button: {
        fontFamily: fontFamily,
        fontSize: rem(16, htmlFontSize),
        fontWeight: fontWeightMedium,
        textTransform: 'none',
        color: palette.background.textPrimary,
      },
      caption: {
        fontFamily: fontFamily,
        fontSize: rem(12, htmlFontSize),
        fontWeight: fontWeightRegular,
        textTransform: 'none',
        lineHeight: em(16, 12),
        color: palette.background.textSecondary,
      },
    },
    rest
  );
};

export default createTypography;
