// @flow
import * as React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import isEqual from 'react-fast-compare';

import Context from '../Context';
import type { ThemeOutput } from '../../../types';

const withTheme = () => <Props: {}>(
  Component: React.ComponentType<Props>
): React.ComponentType<$Rest<{ theme: ThemeOutput }, Props>> => {
  class WithTheme extends React.Component<Props> {
    shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    }

    render() {
      return (
        <Context.Consumer>{theme => <Component theme={theme} {...this.props} />}</Context.Consumer>
      );
    }
  }

  WithTheme.displayName = wrapDisplayName(Component, 'WithTheme');

  return WithTheme;
};

export default withTheme;
