// @flow
import { em } from 'polished';

import type { Breakpoint, BreakpointsInput, BreakpointsOutput } from '../../../types';

const keys: Array<Breakpoint> = ['xs', 'sm', 'md', 'lg', 'xl'];

const createBreakpoints = (breakpoints: BreakpointsInput): BreakpointsOutput => {
  const {
    values = {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1280,
      xl: 1920,
    },
    step = 5,
  } = breakpoints;

  const min = (key: Breakpoint | number) => {
    const value =
      typeof key === 'string' && typeof values[key] === 'number' ? em(values[key]) : `${key}px`;
    return `@media (min-width:${value})`;
  };

  const max = (key: Breakpoint | number) => {
    let value;

    if (typeof key === 'number') {
      value = em(key);
    } else {
      const endIndex = keys.indexOf(key) + 1;

      if (endIndex === keys.length) {
        return min('xs');
      }

      const upperLimit = values[keys[endIndex]];

      value =
        typeof upperLimit === 'number' && endIndex > 0 ? em(upperLimit - step / 100) : `${key}px`;
    }
    return `@media (max-width:${value})`;
  };

  const between = (start: Breakpoint | number, end: Breakpoint | number) => {
    const minValue =
      typeof start === 'string' && typeof values[start] === 'number'
        ? em(values[start])
        : `${start}px`;

    let maxValue;

    if (typeof end === 'number') {
      maxValue = em(end);
    } else {
      const endIndex = keys.indexOf(end) + 1;

      if (endIndex === keys.length) {
        return min(start);
      }

      const upperLimit = values[keys[endIndex]];

      maxValue =
        typeof upperLimit === 'number' && endIndex > 0 ? em(upperLimit - step / 100) : `${end}px`;
    }
    return `@media (min-width:${minValue}) and (max-width:${maxValue})`;
  };

  const exact = (key: Breakpoint) => between(key, key);

  return {
    keys,
    values,
    min,
    max,
    between,
    exact,
  };
};

export default createBreakpoints;
