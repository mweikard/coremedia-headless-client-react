// @flow
import React from 'react';

describe('FetchConsumer Component', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    // Workaround for https://github.com/facebook/react/issues/11098
    jest.spyOn(console, 'error');
    global.console.error.mockImplementation(() => {});
  });

  afterEach(() => {
    global.console.error.mockRestore();
  });

  const context = {
    host: 'http://context.com',
    tenantId: 'coremedia',
    siteId: 'ID123',
    contentUrlPrefix: 'coremedia:///',
  };

  const getFetchConsumerWithContext = () => {
    jest.doMock('../../Context/FetchContext', () => {
      return {
        Consumer: props => props.children(context),
      };
    });

    return require('..').Fetch;
  };

  it('should consume context and provide it to Fetch component', async () => {
    const FetchConsumer = getFetchConsumerWithContext();
    const props = { fragmentType: 'teaser', contentId: 'id123' };
    const wrapper = shallow(<FetchConsumer {...props}>{() => {}}</FetchConsumer>);
    const fetchWrapper = wrapper.shallow();
    const { children, ...otherProps } = fetchWrapper.props();
    const expected = { ...context, ...props };
    expect(otherProps).toEqual(expected);
  });

  it('should consume context and provide it to Fetch component except overridden props', async () => {
    const FetchConsumer = getFetchConsumerWithContext();
    const props = {
      host: 'http://localhost.com',
      tenantId: 'sherlock',
      siteId: 'ID321',
      contentUrlPrefix: 'prefix:///',
      fragmentType: 'teaser',
      contentId: 'id123',
    };
    const wrapper = shallow(<FetchConsumer {...props}>{() => {}}</FetchConsumer>);
    const fetchWrapper = wrapper.shallow();
    const { children, ...otherProps } = fetchWrapper.props();
    const expected = { ...props };
    expect(otherProps).toEqual(expected);
  });
});
