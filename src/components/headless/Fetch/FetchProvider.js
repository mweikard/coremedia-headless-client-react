// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import FetchContext from '../Context/FetchContext';

type ProviderProps = {
  host: string,
  tenantId?: string,
  siteId?: string,
  timeout?: number,
  contentUrlPrefix?: string,
  children: any,
};

const FetchProvider = ({
  host,
  tenantId,
  siteId,
  timeout,
  contentUrlPrefix,
  children,
}: ProviderProps) => (
  <FetchContext.Provider value={{ host, tenantId, siteId, timeout, contentUrlPrefix }}>
    {children}
  </FetchContext.Provider>
);

FetchProvider.propTypes = {
  host: PropTypes.string.isRequired,
  tenantId: PropTypes.string,
  siteId: PropTypes.string,
  timeout: PropTypes.number,
  contentUrlPrefix: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FetchProvider;
