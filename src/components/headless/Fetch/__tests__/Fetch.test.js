// @flow
import React from 'react';
import mockAxios from 'axios';

import Fetch from '../Fetch';

jest.mock('axios');

describe('Fetch Component', () => {
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

  it('should return data', async () => {
    const data = {
      teaserTitle: 'Content Management at a new Scale with CoreMedia CaaS',
      teaserText: 'Discover the new CoreMedia Headless Services.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/',
      },
      picture: {
        title: 'Globe',
        alt: 'Globe',
        link: 'coremedia:///image/2656/data',
      },
    };
    mockAxios.get.mockImplementation(() => Promise.resolve({ data }));
    const wrapper = shallow(
      <Fetch
        host="http://localhost"
        tenantId="coremedia"
        siteId="siteA"
        fragmentType="teaser"
        contentId="id123"
        viewType="hero"
      >
        {() => {}}
      </Fetch>,
      { disableLifecycleMethods: true }
    );
    expect(wrapper.state('pending')).toBe(false);
    await expect(wrapper.instance().componentDidMount()).resolves;
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(data);
    expect(wrapper.state('error')).toEqual(null);
  });

  it('should not perform an API call and have state.getMediaUrl to be undefined', async () => {
    const data = {
      teaserTitle: 'Content Management at a new Scale with CoreMedia CaaS',
      teaserText: 'Discover the new CoreMedia Headless Services.',
      teaserTarget: {
        title: '',
        segment: '',
        link: 'https://www.coremedia.com/',
      },
      picture: {
        title: 'Globe',
        alt: 'Globe',
        link: 'coremedia:///image/2656/data',
      },
    };
    mockAxios.get.mockImplementation(() => Promise.resolve({ data }));
    const wrapper = shallow(
      <Fetch fragmentType="teaser" contentId="id123" viewType="hero">
        {() => {}}
      </Fetch>,
      { disableLifecycleMethods: true }
    );
    expect(wrapper.state('pending')).toBe(false);
    await expect(wrapper.instance().componentDidMount()).resolves;
    expect(mockAxios.get).toHaveBeenCalledTimes(0);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toBe(null);
    expect(wrapper.state('error')).toBe(null);
    expect(wrapper.state('getMediaUrl')).toBe(undefined);
  });

  it('should return error when API call rejects', async () => {
    mockAxios.get.mockImplementation(() => Promise.reject());
    const wrapper = shallow(
      <Fetch
        host="http://localhost"
        tenantId="coremedia"
        siteId="siteA"
        fragmentType="teaser"
        contentId="id123"
      >
        {() => {}}
      </Fetch>,
      { disableLifecycleMethods: true }
    );
    expect(wrapper.state('pending')).toBe(false);
    await expect(wrapper.instance().componentDidMount()).resolves;
    // Workaround for https://github.com/airbnb/enzyme/issues/1587 and
    //                https://github.com/facebook/jest/issues/2157
    await new Promise(res => process.nextTick(res));
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(null);
    expect(wrapper.state('error')).toEqual('Fragment data couldn´t be retrieved.');
  });

  it('should return error when API call returns no data', async () => {
    mockAxios.get.mockImplementation(() => Promise.resolve({ data: {} }));
    const wrapper = shallow(
      <Fetch
        host="http://localhost"
        tenantId="coremedia"
        siteId="siteA"
        fragmentType="teaser"
        contentId="id123"
      >
        {() => {}}
      </Fetch>,
      { disableLifecycleMethods: true }
    );
    expect(wrapper.state('pending')).toBe(false);
    await expect(wrapper.instance().componentDidMount()).resolves;
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(null);
    expect(wrapper.state('error')).toEqual('No data returned for fragment.');
  });

  it('should return error when fragmentType is unknown', async () => {
    const wrapper = shallow(
      <Fetch
        host="http://localhost"
        tenantId="coremedia"
        siteId="siteA"
        fragmentType="unknown"
        contentId="id123"
      >
        {() => {}}
      </Fetch>,
      { disableLifecycleMethods: true }
    );
    expect(wrapper.state('pending')).toBe(false);
    await expect(wrapper.instance().componentDidMount()).resolves;
    expect(mockAxios.get).toHaveBeenCalledTimes(0);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(null);
    expect(wrapper.state('error')).toEqual('No config found for fragmentType="unknown".');
  });
});
