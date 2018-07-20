// @flow
import type { PaletteOutput, Color } from '../../../types';

const getColors = (palette: PaletteOutput, name: string): Color =>
  (palette && name && (palette[name] || palette.common[name] || palette.additional[name])) || {
    color: '#fff',
    text: '#000',
  };

export default getColors;
