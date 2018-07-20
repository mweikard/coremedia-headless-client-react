// @flow
import createPalette from '../createPalette';

describe('createPalette()', () => {
  it(`should return matching value using default parameter value`, () => {
    const result = createPalette({});
    expect(result).toMatchInlineSnapshot(`
Object {
  "additional": Object {},
  "background": Object {
    "color": "#fff",
    "textDisabled": "rgba(0,0,0,0.38)",
    "textPrimary": "rgba(0,0,0,0.87)",
    "textSecondary": "rgba(0,0,0,0.6)",
  },
  "common": Object {
    "black": "#000",
    "white": "#fff",
  },
  "overlay": Object {
    "color": "rgba(173,173,173,0.9)",
  },
  "primary": Object {
    "color": "#0a84ff",
    "text": "rgba(255,255,255,0.87)",
  },
  "secondary": Object {
    "color": "#ed00b5",
    "text": "rgba(255,255,255,0.87)",
  },
  "surface": Object {
    "color": "#fff",
    "textDisabled": "rgba(0,0,0,0.38)",
    "textPrimary": "rgba(0,0,0,0.87)",
    "textSecondary": "rgba(0,0,0,0.6)",
  },
}
`);
  });
  it(`should return matching value using custom value`, () => {
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
    const result = createPalette(palette);
    expect(result).toMatchInlineSnapshot(`
Object {
  "additional": Object {
    "blue": Object {
      "color": "rgb(10, 153, 255)",
      "text": "rgba(255, 255, 255, 1)",
    },
  },
  "background": Object {
    "color": "rgb(250, 250, 250)",
    "textDisabled": "rgba(0, 0, 0, 0.5)",
    "textPrimary": "rgba(0, 0, 0, 1)",
    "textSecondary": "rgba(0, 0, 0, 0.8)",
  },
  "common": Object {
    "black": "#000",
    "white": "#fff",
  },
  "overlay": Object {
    "color": "rgba(150, 150, 150, 0.9)",
  },
  "primary": Object {
    "color": "rgb(20, 160, 20)",
    "text": "rgba(255, 255, 255, 1)",
  },
  "secondary": Object {
    "color": "rgb(255, 100, 10)",
    "text": "rgba(255, 255, 255, 1)",
  },
  "surface": Object {
    "color": "rgb(250, 250, 250)",
    "textDisabled": "rgba(0, 0, 0, 0.5)",
    "textPrimary": "rgba(0, 0, 0, 1)",
    "textSecondary": "rgba(0, 0, 0, 0.8)",
  },
}
`);
  });
});
