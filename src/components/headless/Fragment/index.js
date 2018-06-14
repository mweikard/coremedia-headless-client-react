// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import getComponent from '../utils/getComponent';
import getConfig from '../utils/getConfig';
import type { FragmentProps, FragmentState } from '../../../types';

class Fragment extends React.Component<FragmentProps, FragmentState> {
  static propTypes = {
    fragmentType: PropTypes.string.isRequired,
    viewType: PropTypes.string.isRequired,
    params: PropTypes.object,
    data: PropTypes.object.isRequired,
  };

  state = {};

  static getDerivedStateFromProps(props: FragmentProps, state: FragmentState) {
    let nextState = null;

    if (props.fragmentType && props.fragmentType !== state.fragmentType) {
      const { fragmentType, data, params } = props;
      const config = getConfig(fragmentType);
      const componentProps = config.createProps({ data, params });

      nextState = {
        fragmentType,
        config,
        componentProps,
      };
    }

    if (props.viewType && props.viewType !== state.viewType) {
      const { config } = nextState ? nextState : state;

      if (config) {
        const { viewType } = props;
        const Component = getComponent(config.module, viewType);

        nextState = {
          ...nextState,
          viewType,
          Component,
        };
      }
    }

    return nextState;
  }

  shouldComponentUpdate(nextProps: FragmentProps, nextState: FragmentState) {
    if (
      this.props.fragmentType !== nextProps.fragmentType ||
      this.props.viewType !== nextProps.viewType ||
      this.props.params !== nextProps.params ||
      this.props.data !== nextProps.data
    ) {
      return true;
    }
    return false;
  }

  render() {
    const { Component, componentProps } = this.state;
    return Component ? <Component {...componentProps} /> : null;
  }
}

export default Fragment;
