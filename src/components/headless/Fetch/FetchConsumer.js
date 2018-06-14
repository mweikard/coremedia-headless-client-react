// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import Fetch from './Fetch';
import FetchContext from '../Context/FetchContext';

type FetchProps = {
  host?: string,
  tenantId?: string,
  siteId?: string,
  timeout?: number,
  contentUrlPrefix?: string,
  fragmentType: string,
  contentId: string,
  children: ({ pending: boolean, data: ?Object, error: ?string }) => React.Node,
};

const FetchConsumer = ({ children, ...values }: FetchProps) => (
  <FetchContext.Consumer>
    {defaultProps => {
      const props = { ...defaultProps, ...values };
      return <Fetch {...props}>{children}</Fetch>;
    }}
  </FetchContext.Consumer>
);

Fetch.propTypes = {
  host: PropTypes.string,
  tenantId: PropTypes.string,
  siteId: PropTypes.string,
  timeout: PropTypes.number,
  contentUrlPrefix: PropTypes.string,
  fragmentType: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired,
};

export default FetchConsumer;
