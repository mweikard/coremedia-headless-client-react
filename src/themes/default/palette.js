// @flow
import { transparentize, rgb } from 'polished';

const colors = {
  black: rgb(0, 0, 0),
  white: rgb(255, 255, 255),
  darkgrey: rgb(173, 173, 173),
  blue: rgb(0, 108, 174),
  red: rgb(221, 52, 40),
  turquoise: rgb(111, 195, 184),
  yellow: rgb(239, 223, 15),
  green: rgb(47, 172, 102),
};
const palette = {
  primary: {
    color: colors.blue,
    text: transparentize(0.13, colors.white),
  },
  secondary: {
    color: colors.red,
    text: transparentize(0.13, colors.white),
  },
  overlay: {
    color: transparentize(0.1, colors.darkgrey),
  },
  additional: {
    blue: {
      color: colors.blue,
      text: transparentize(0.13, colors.white),
    },
    red: {
      color: colors.red,
      text: transparentize(0.13, colors.white),
    },
    turquoise: {
      color: colors.turquoise,
      text: transparentize(0.13, colors.white),
    },
    yellow: {
      color: colors.yellow,
      text: transparentize(0.13, colors.white),
    },
    green: {
      color: colors.green,
      text: transparentize(0.13, colors.white),
    },
  },
};

export default palette;
