// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

import getConfig from '../utils/getConfig';
import createGetMediaUrl from '../utils/createGetMediaUrl';
import MediaContext from '../Context/MediaContext';
import type { Config, ImageRatios } from '../../../types';

type Props = {
  host: string,
  tenantId: string,
  siteId: string,
  fragmentType: string,
  contentId: string,
  contentUrlPrefix: string,
  children: ({ pending: boolean, data: ?Object, error: ?string }) => React.Node,
};

type State = {
  prevHost?: string,
  prevTenantId?: string,
  prevSiteId?: string,
  prevFragmentType?: string,
  baseURL?: string,
  config?: Config,
  getMediaUrl?: (link: string, ratio?: string, minWidth?: number) => string,
  imageRatios?: ImageRatios,
  pending: boolean,
  data: ?Object,
  error: ?string,
};

export default class FetchImpl extends React.Component<Props, State> {
  static propTypes = {
    host: PropTypes.string.isRequired,
    tenantId: PropTypes.string.isRequired,
    siteId: PropTypes.string.isRequired,
    fragmentType: PropTypes.string.isRequired,
    contentId: PropTypes.string.isRequired,
    contentUrlPrefix: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  };

  static defaultProps = {
    contentUrlPrefix: 'coremedia:///',
  };

  state = {
    getMediaUrl: undefined,
    imageRatios: undefined,
    pending: false,
    data: null,
    error: null,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    let nextState = null;
    if (
      props.host &&
      props.tenantId &&
      props.siteId &&
      (props.host !== state.prevHost ||
        props.tenantId !== state.prevTenantId ||
        props.siteId !== state.prevSiteId)
    ) {
      const baseURL = `${props.host}/caas/v1/${props.tenantId}/sites/${props.siteId}`;
      if (baseURL !== state.baseURL) {
        nextState = {
          prevHost: props.host,
          prevTenantId: props.tenantId,
          prevSiteId: props.siteId,
          baseURL,
          getMediaUrl: createGetMediaUrl(baseURL, props.contentUrlPrefix),
        };
      }
    }
    if (props.fragmentType !== state.prevFragmentType) {
      try {
        const { fragmentType } = props;
        const config = getConfig(fragmentType);

        nextState = {
          ...nextState,
          prevFragmentType: fragmentType,
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
      const { contentId } = this.props;

      const { baseURL } = this.state;
      const { queryName, viewName } = this.state.config;

      this.setState(prevState => ({ pending: true }));

      const getImageVariants = () =>
        fetch(`${baseURL}/media/image/variants`, {
          headers: { authorization: 'intern', 'Cache-Control': 'must-revalidate, max-age=60' },
          cache: 'default',
        }).then(response => response.json());

      const getContentQuery = () =>
        fetch(`${baseURL}/${queryName}/${contentId}${viewName ? `/${viewName}` : ''}`, {
          headers: { authorization: 'intern', 'Cache-Control': 'no-cache' },
        }).then(response => response.json());

      Promise.all([getImageVariants(), getContentQuery()])
        .then(([imageVariants, contentQuery]) => {
          if (!imageVariants || !imageVariants.ratios) {
            throw new TypeError('Image variants could not be retrieved.');
          }
          if (!contentQuery || !Object.keys(contentQuery).length) {
            throw new TypeError('Content data could not be retrieved.');
          }
          this.setState(prevState => ({
            pending: false,
            data: contentQuery,
            imageRatios: imageVariants.ratios,
          }));
        })
        .catch(reason => {
          const error =
            reason instanceof TypeError ? reason.message : 'Data could not be retrieved.';
          this.setState(prevState => ({
            pending: false,
            error,
          }));
        });
    }
  }

  render() {
    const { pending, data, error, getMediaUrl, imageRatios } = this.state;
    let providerProps = {};
    if (getMediaUrl && imageRatios) {
      providerProps = {
        value: { getMediaUrl, imageRatios },
      };
    }
    return (
      <MediaContext.Provider {...providerProps}>
        {this.props.children({ pending, data, error })}
      </MediaContext.Provider>
    );
  }
}
