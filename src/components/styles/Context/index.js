// @flow
import * as React from 'react';

import { createTheme } from '../utils';

const defaultTheme = createTheme();

const ThemeContext = React.createContext(defaultTheme);

export default ThemeContext;
