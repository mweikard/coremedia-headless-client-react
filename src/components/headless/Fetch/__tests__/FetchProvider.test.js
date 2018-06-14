// @flow
import React from 'react';

import { FetchProvider } from '..';

describe('FetchProvider Component', () => {
  it('should consume context and provide it to Fetch component', async () => {
    const context = {
      host: 'http://context.com',
      tenantId: 'coremedia',
      siteId: 'ID123',
      timeout: 3000,
    };
    const wrapper = shallow(<FetchProvider {...context}>Content</FetchProvider>);
    const {
      value: { children, ...otherProps },
    } = wrapper.props();
    expect(otherProps).toEqual(context);
  });
});
