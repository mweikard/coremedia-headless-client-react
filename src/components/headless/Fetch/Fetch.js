// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import getConfig from '../utils/getConfig';
import createGetMediaUrl from '../utils/createGetMediaUrl';
import MediaContext from '../Context/MediaContext';
import type { Config } from '../../../types';

type Props = {
  host: string,
  tenantId: string,
  siteId: string,
  timeout: number,
  fragmentType: string,
  contentId: string,
  contentUrlPrefix: string,
  children: ({ pending: boolean, data: ?Object, error: ?string }) => React.Node,
};

type State = {
  baseURL?: string,
  fragmentType?: string,
  config?: Config,
  getMediaUrl?: (link: string, ratio?: string, minWidth?: number) => string,
  pending: boolean,
  data: ?Object,
  error: ?string,
};

export default class FetchImpl extends React.Component<Props, State> {
  static propTypes = {
    host: PropTypes.string.isRequired,
    tenantId: PropTypes.string.isRequired,
    siteId: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired,
    fragmentType: PropTypes.string.isRequired,
    contentId: PropTypes.string.isRequired,
    contentUrlPrefix: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  };

  static defaultProps = {
    timeout: 0,
    contentUrlPrefix: 'coremedia:///',
  };

  state = {
    pending: false,
    data: null,
    error: null,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    let nextState = null;
    if (props.host && props.tenantId && props.siteId) {
      const baseURL = `${props.host}/caas/v1/${props.tenantId}/sites/${props.siteId}`;
      if (baseURL !== state.baseURL) {
        nextState = {
          baseURL,
          getMediaUrl: createGetMediaUrl(baseURL, props.contentUrlPrefix),
        };
      }
    }
    if (props.fragmentType !== state.fragmentType) {
      try {
        const { fragmentType } = props;
        const config = getConfig(fragmentType);

        nextState = {
          ...nextState,
          fragmentType,
          config,
        };
      } catch (error) {
        nextState = {
          ...nextState,
          error: error.message,
        };
      }
    }
    return nextState;
  }

  componentDidMount() {
    if (
      this.state.baseURL &&
      this.state.config &&
      this.state.config.queryName &&
      this.props.contentId
    ) {
      const { timeout, contentId } = this.props;

      const { baseURL } = this.state;
      const { queryName, viewName } = this.state.config;

      this.setState(prevState => ({ pending: true }));

      const url = `/${queryName}/${contentId}${viewName ? `/${viewName}` : ''}`;

      axios
        .get(url, {
          baseURL,
          timeout,
          headers: { authorization: 'intern' },
        })
        .then(({ data }) => {
          if (!data || !Object.keys(data).length) {
            this.setState(prevState => ({
              pending: false,
              error: 'No data returned for fragment.',
            }));
          } else {
            this.setState(prevState => ({ pending: false, data }));
          }
        })
        .catch(error => {
          this.setState(prevState => ({
            pending: false,
            error: 'Fragment data couldn´t be retrieved.',
          }));
        });
    }
  }

  render() {
    const { pending, data, error } = this.state;
    let providerProps = {};
    if (this.state.getMediaUrl) {
      providerProps = {
        value: { getMediaUrl: this.state.getMediaUrl },
      };
    }
    return (
      <MediaContext.Provider {...providerProps}>
        {this.props.children({ pending, data, error })}
      </MediaContext.Provider>
    );
  }
}
