// @flow
import * as React from 'react';

const MediaContext = React.createContext({
  getMediaUrl: (link: string): string => link,
});

export default MediaContext;
