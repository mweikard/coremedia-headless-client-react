// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import FetchContext from '../Context/FetchContext';

type ProviderProps = {
  host: string,
  tenantId?: string,
  siteId?: string,
  contentUrlPrefix?: string,
  children: any,
};

const FetchProvider = ({ host, tenantId, siteId, contentUrlPrefix, children }: ProviderProps) => (
  <FetchContext.Provider value={{ host, tenantId, siteId, contentUrlPrefix }}>
    {children}
  </FetchContext.Provider>
);

FetchProvider.propTypes = {
  host: PropTypes.string.isRequired,
  tenantId: PropTypes.string,
  siteId: PropTypes.string,
  contentUrlPrefix: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FetchProvider;
