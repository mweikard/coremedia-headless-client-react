// @flow
import createBreakpoints from './createBreakpoints';
import createPalette from './createPalette';
import createTypography from './createTypography';

import type { ThemeInput, ThemeOutput } from '../../../types';

const createTheme = (options: ThemeInput = {}): ThemeOutput => {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    typography: typographyInput = {},
    ...rest
  } = options;

  const breakpoints = createBreakpoints(breakpointsInput);
  const palette = createPalette(paletteInput);
  const typography = createTypography(palette, breakpoints, typographyInput);

  return {
    breakpoints,
    palette,
    typography,
    overrides: {},
    ...rest,
  };
};

export default createTheme;
