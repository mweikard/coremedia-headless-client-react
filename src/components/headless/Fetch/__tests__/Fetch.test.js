// @flow
import React from 'react';

import Fetch from '../Fetch';

describe('Fetch Component', () => {
  const mockFetch = (imageVariantsData, contentQueryData) =>
    jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => imageVariantsData,
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => contentQueryData,
        })
      )
      .mockName('fetch');

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
    const imageVariantsData = {
      ratios: {
        landscape_ratio16x9: {
          minWidth: 320,
          minHeight: 180,
          widthRatio: 16,
          heightRatio: 9,
          dimensions: [
            {
              width: 320,
              height: 180,
            },
            {
              width: 480,
              height: 270,
            },
            {
              width: 768,
              height: 432,
            },
            {
              width: 992,
              height: 558,
            },
            {
              width: 1200,
              height: 675,
            },
          ],
        },
        thumbnail: {
          minWidth: 77,
          minHeight: 93,
          widthRatio: 77,
          heightRatio: 93,
          dimensions: [
            {
              width: 77,
              height: 93,
            },
          ],
        },
      },
    };
    const contentQueryData = {
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
    global.fetch = mockFetch(imageVariantsData, contentQueryData);

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
    expect(global.fetch).toHaveBeenCalledTimes(2);
    // Workaround for https://github.com/airbnb/enzyme/issues/1587 and
    //                https://github.com/facebook/jest/issues/2157
    await new Promise(res => process.nextTick(res));
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(contentQueryData);
    expect(wrapper.state('imageRatios')).toEqual(imageVariantsData.ratios);
    expect(wrapper.state('error')).toBe(null);
  });

  it('should not perform an API call and have state.getMediaUrl to be undefined', async () => {
    global.fetch = mockFetch({}, {});

    const wrapper = shallow(
      <Fetch fragmentType="teaser" contentId="id123" viewType="hero">
        {() => {}}
      </Fetch>,
      { disableLifecycleMethods: true }
    );
    expect(wrapper.state('pending')).toBe(false);
    await expect(wrapper.instance().componentDidMount()).resolves;
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toBe(null);
    expect(wrapper.state('error')).toBe(null);
    expect(wrapper.state('getMediaUrl')).toBe(undefined);
  });

  it('should return error when API call rejects', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject())
      .mockName('fetch');

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
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(null);
    expect(wrapper.state('error')).toEqual('Data could not be retrieved.');
  });

  it('should return error when API call returns no data', async () => {
    global.fetch = mockFetch({}, {});

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
    expect(global.fetch).toHaveBeenCalledTimes(2);
    // Workaround for https://github.com/airbnb/enzyme/issues/1587 and
    //                https://github.com/facebook/jest/issues/2157
    await new Promise(res => process.nextTick(res));
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(null);
    expect(wrapper.state('error')).toEqual('Image variants could not be retrieved.');
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
    expect(global.fetch).toHaveBeenCalledTimes(0);
    expect(wrapper.state('pending')).toBe(false);
    expect(wrapper.state('data')).toEqual(null);
    expect(wrapper.state('error')).toEqual('No config found for fragmentType="unknown".');
  });
});
