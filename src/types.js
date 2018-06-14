// @flow
export type Config = {
  queryName: string,
  viewName: ?string,
  module: Object,
  createProps: (ownerProps: { data: Object, params: FragmentParams | void }) => Object,
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

export type ColorProps = {
  fg: string,
  bgsolid: string,
  bgtrans: string,
  huerotation: string,
};

export type Colors = {
  [string]: ColorProps,
};

export type Breakpoints = {
  [label: string]: number,
};

export type Theme = {
  [key: string]: mixed,
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
