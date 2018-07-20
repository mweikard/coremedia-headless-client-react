// @flow
import * as React from 'react';

import Context from '../Context';
import type { ThemeOutput } from '../../../types';

type Props = {
  theme: ThemeOutput,
  children: React.Node,
};

const ThemeProvider = ({ theme, children }: Props) => (
  <Context.Provider value={theme}>{children}</Context.Provider>
);

export default ThemeProvider;
