// @flow
export type Config = {
  queryName: string,
  viewName: ?string,
  module: Object,
  createProps: (ownerProps: { data: Object, params: FragmentParams | void }) => Object,
};

export type Dimensions = Array<{| width: number, height: number |}>;

export type ImageRatios = {
  [label: string]: {|
    minWidth: number,
    minHeight: number,
    widthRatio: number,
    heightRatio: number,
    dimensions: Dimensions,
  |},
};

export type Teaser = {
  url?: string,
  pictureLink?: string,
  pictureTitle?: string,
  pictureAlt?: string,
  title?: string,
  text?: string,
  params?: FragmentParams,
};

export type Colors = {
  [name: string]: string,
};

export type Color = {
  color: string,
  text: string,
};

export type ColorExtended = {
  color: string,
  textPrimary: string,
  textSecondary: string,
  textDisabled: string,
};

export type PaletteInput = {
  primary?: Color,
  secondary?: Color,
  background?: ColorExtended,
  surface?: ColorExtended,
  overlay?: {
    color: string,
  },
  additional?: {
    [key: string]: Color,
  },
};

export type PaletteOutput = {
  primary: Color,
  secondary: Color,
  background: ColorExtended,
  surface: ColorExtended,
  overlay: {
    color: string,
  },
  common: {
    white: string,
    black: string,
  },
  additional: {
    [key: string]: Color,
  },
};

export type CSSStyleRule = {
  [key: string]: string | number,
};

export type CSSAtRule = {
  [key: string]: CSSStyleRule,
};

export type CSSRules = Object; //CSSStyleRule & CSSAtRule;

type TypographyInputFn = (palette: PaletteOutput, breakpoints: BreakpointsOutput) => Object;

type TypographyInputObject = {
  fontFamily?: string,
  fontWeightLight?: number,
  fontWeightRegular?: number,
  fontWeightMedium?: number,
  htmlFontSize?: number,
};

export type TypographyInput = TypographyInputFn | TypographyInputObject;

export type TypographyOutput = {
  /*fontFamily: string,
  fontWeightLight: number,
  fontWeightRegular: number,
  fontWeightMedium: number,
  htmlFontSize: number,*/
  title1: CSSRules,
  /*title2: CSSRules,
  title3: CSSRules,
  title4: CSSRules,
  title5: CSSRules,
  title6: CSSRules,
  body1: CSSRules,
  body2: CSSRules,
  button: CSSRules,
  caption: CSSRules,*/
};

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointValues = {
  [key: Breakpoint]: number,
};

export type BreakpointsInput = {|
  values?: BreakpointValues,
  step?: number,
|};

export type BreakpointsOutput = {|
  keys: Array<Breakpoint>,
  values: BreakpointValues,
  min: (key: Breakpoint | number) => string,
  max: (key: Breakpoint | number) => string,
  between: (start: Breakpoint | number, end: Breakpoint | number) => string,
  exact: (key: Breakpoint) => string,
|};

export type ThemeInput = {
  breakpoints?: BreakpointsInput,
  palette?: PaletteInput,
  typography?: TypographyInput,
};

export type ThemeOutput = {
  breakpoints: BreakpointsOutput,
  palette: PaletteOutput,
  typography: TypographyOutput,
  overrides: Object,
};

export type FragmentProps = {
  fragmentType: string,
  viewType: string,
  params?: Object,
  data: Object,
};

export type FragmentParams = {
  color?: string,
  ctaShow?: boolean,
  ctaText?: string,
  url?: string,
};

export type FragmentState = {
  fragmentType?: string,
  viewType?: string,
  config?: Config,
  Component?: Function,
  componentProps?: Object,
};

export type MediaContextValue = {
  getMediaUrl: (link: string, ratio?: string, minWidth?: number) => string,
};
