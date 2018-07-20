// @flow
import createTheme from '../createTheme';

describe('createTheme()', () => {
  it(`should return matching value`, () => {
    const result = createTheme();
    expect(result).toMatchSnapshot();
  });
  it(`should return matching value using custom theme`, () => {
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
    const palette = {
      primary: {
        color: 'rgb(20, 160, 20)',
        text: 'rgba(255, 255, 255, 1)',
      },
      secondary: {
        color: 'rgb(255, 100, 10)',
        text: 'rgba(255, 255, 255, 1)',
      },
      background: {
        color: 'rgb(250, 250, 250)',
        textPrimary: 'rgba(0, 0, 0, 1)',
        textSecondary: 'rgba(0, 0, 0, 0.8)',
        textDisabled: 'rgba(0, 0, 0, 0.5)',
      },
      surface: {
        color: 'rgb(250, 250, 250)',
        textPrimary: 'rgba(0, 0, 0, 1)',
        textSecondary: 'rgba(0, 0, 0, 0.8)',
        textDisabled: 'rgba(0, 0, 0, 0.5)',
      },
      overlay: {
        color: 'rgba(150, 150, 150, 0.9)',
      },
      additional: {
        blue: {
          color: 'rgb(10, 153, 255)',
          text: 'rgba(255, 255, 255, 1)',
        },
      },
    };
    const typography = {
      fontFamily: 'Verdana',
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightMedium: 700,
      htmlFontSize: 14,
    };
    const result = createTheme({
      breakpoints,
      palette,
      typography,
      other: {
        value: 'text',
      },
    });
    expect(result).toMatchSnapshot();
  });
});
