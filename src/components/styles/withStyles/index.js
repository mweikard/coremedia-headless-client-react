// @flow
import * as React from 'react';
import styled from 'styled-components';
import merge from 'deepmerge';
import memoize from 'memoize-one';
import isEqual from 'react-fast-compare';

import withTheme from '../withTheme';

import type { ThemeOutput } from '../../../types';

/* const withStyles = (styles: Object | Function, name?: string) => <Props: {}>(
  Component: React.ComponentType<Props>
): React.ComponentType<Props> => {
  class WithStyles extends React.Component<$Rest<{ theme: ThemeOutput }, Props>> {
    getComponent = props => {
      const { theme, componentStyles: extendedComponentStyles = {}, ...rest } = props;
      const overrides = (theme && theme.overrides && theme.overrides[name]) || {};
      const defaults = typeof styles === 'function' ? styles(theme, rest) : styles;
      const componentStyles = merge.all([defaults, overrides, extendedComponentStyles]);

      if (Object.keys(componentStyles).length) {
        if (Component.name === 'WithTheme') {
          return <Component componentStyles={componentStyles} {...rest} />;
        } else {
          const Styled = styled(Component)(componentStyles);
          return <Styled {...rest} />;
        }
      }
      return null;
    };

    shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    }

    render() {
      const Comp = this.getComponent(this.props);
      return Comp;
    }
  }

  WithStyles.displayName = wrapDisplayName(Component, 'WithStyles');

  return withTheme()(WithStyles);
}; */

const withStyles = (styles: Object | Function, name: string) => <Props: {}>(
  Component: React.ComponentType<Props>
): React.ComponentType<Props> => {
  const isBaseComponent = Component.name !== 'WithTheme';

  class WithStyles extends React.Component<$Rest<{ theme: ThemeOutput }, Props>> {
    getComponentStyles = memoize((theme, componentStyles, props) => {
      const overrides = (theme && theme.overrides && theme.overrides[name]) || {};
      const defaults = typeof styles === 'function' ? styles(theme, props) : styles;

      return merge.all([defaults, overrides, componentStyles]);
    }, isEqual);

    createStyledComponent = memoize(componentStyles => styled(Component)(componentStyles), isEqual);

    render() {
      const { theme, componentStyles: prevComponentStyles = {}, ...rest } = this.props;
      const componentStyles = this.getComponentStyles(theme, prevComponentStyles, rest);

      if (isBaseComponent) {
        const Styled = this.createStyledComponent(componentStyles);
        return <Styled {...rest} />;
      }

      return <Component componentStyles={componentStyles} {...rest} />;
    }
  }

  WithStyles.displayName = `WithStyles(${name})`;

  return withTheme()(WithStyles);
};

export default withStyles;
