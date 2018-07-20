// @flow
import { rgb, rgba } from 'polished';
import merge from 'deepmerge';

import type { PaletteInput, PaletteOutput } from '../../../types';

const createPalette = (palette: PaletteInput): PaletteOutput => {
  const {
    primary = {
      color: rgb(10, 132, 255),
      text: rgba(255, 255, 255, 0.87),
    },
    secondary = {
      color: rgb(237, 0, 181),
      text: rgba(255, 255, 255, 0.87),
    },
    background = {
      color: rgb(255, 255, 255),
      textPrimary: rgba(0, 0, 0, 0.87),
      textSecondary: rgba(0, 0, 0, 0.6),
      textDisabled: rgba(0, 0, 0, 0.38),
    },
    surface = {
      color: rgb(255, 255, 255),
      textPrimary: rgba(0, 0, 0, 0.87),
      textSecondary: rgba(0, 0, 0, 0.6),
      textDisabled: rgba(0, 0, 0, 0.38),
    },
    overlay = {
      color: rgba(173, 173, 173, 0.9),
    },
    ...rest
  } = palette;

  const common = {
    white: rgb(255, 255, 255),
    black: rgb(0, 0, 0),
  };

  return merge(
    {
      primary,
      secondary,
      background,
      surface,
      overlay,
      common,
      additional: {},
    },
    rest
  );
};

export default createPalette;
