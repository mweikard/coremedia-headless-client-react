// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ProductBoard from '../';

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
});

describe('ProductBoard Component', () => {
  let originalMatchMedia;
  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should render correctly for breakpoint below sm', () => {
    window.matchMedia = createMockMediaMatcher(false);

    const thumbnails = [
      {
        id: 'ID1',
        teaserTitle: 'Title 1',
        teaserText: 'Text 1',
        pictureLink: 'Link 1',
        pictureTitle: 'Picture Title 1',
        pictureAlt: 'Picture Alt 1',
        price: 100,
        handleClick: jest.fn().mockName('handleClick'),
      },
      {
        id: 'ID2',
        teaserTitle: 'Title 2',
        teaserText: 'Text 2',
        pictureLink: 'Link 2',
        pictureTitle: 'Picture Title 2',
        pictureAlt: 'Picture Alt 2',
        price: 100,
        handleClick: jest.fn().mockName('handleClick'),
      },
      {
        id: 'ID3',
        teaserTitle: 'Title 3',
        teaserText: 'Text 3',
        pictureLink: 'Link 3',
        pictureTitle: 'Picture Title 3',
        pictureAlt: 'Picture Alt 3',
        price: 100,
        handleClick: jest.fn().mockName('handleClick'),
      },
    ];
    const handleReplay = jest.fn().mockName('handleReplay');
    const handleRef = jest.fn().mockName('handleRef');

    const wrapper = shallow(
      <ProductBoard
        thumbnails={thumbnails}
        handleReplay={handleReplay}
        handleRef={handleRef}
        productboardOverflow={false}
        theme={{
          breakpoints: {
            values: {
              sm: 768,
              md: 992,
              lg: 1280,
              xl: 1920,
            },
          },
        }}
      />
    );
    const boardWrapper = wrapper.find('ProductBoard').shallow();
    expect(boardWrapper).toMatchSnapshot();
    const mediaWrapper = boardWrapper.find('Media').shallow();
    expect(mediaWrapper).toMatchSnapshot();
    const transitionWrapper = mediaWrapper.find('Transition');
    expect(transitionWrapper).toHaveLength(3);
    transitionWrapper.forEach((node, index) => {
      expect(node.shallow()).toMatchSnapshot();
    });
  });

  it('should render correctly for breakpoint sm and above', () => {
    window.matchMedia = createMockMediaMatcher(true);

    const thumbnails = [
      {
        id: 'ID1',
        teaserTitle: 'Title 1',
        teaserText: 'Text 1',
        pictureLink: 'Link 1',
        pictureTitle: 'Picture Title 1',
        pictureAlt: 'Picture Alt 1',
        price: 100,
        handleClick: jest.fn().mockName('handleClick'),
      },
      {
        id: 'ID2',
        teaserTitle: 'Title 2',
        teaserText: 'Text 2',
        pictureLink: 'Link 2',
        pictureTitle: 'Picture Title 2',
        pictureAlt: 'Picture Alt 2',
        price: 100,
        handleClick: jest.fn().mockName('handleClick'),
      },
      {
        id: 'ID3',
        teaserTitle: 'Title 3',
        teaserText: 'Text 3',
        pictureLink: 'Link 3',
        pictureTitle: 'Picture Title 3',
        pictureAlt: 'Picture Alt 3',
        price: 100,
        handleClick: jest.fn().mockName('handleClick'),
      },
    ];
    const handleReplay = jest.fn().mockName('handleReplay');
    const handleRef = jest.fn().mockName('handleRef');

    const wrapper = shallow(
      <ProductBoard
        thumbnails={thumbnails}
        handleReplay={handleReplay}
        handleRef={handleRef}
        productboardOverflow={false}
        theme={{
          breakpoints: {
            values: {
              sm: 768,
              md: 992,
              lg: 1280,
              xl: 1920,
            },
          },
        }}
      />
    );
    const boardWrapper = wrapper.find('ProductBoard').shallow();
    expect(boardWrapper).toMatchSnapshot();
    const mediaWrapper = boardWrapper.find('Media').shallow();
    expect(mediaWrapper).toMatchSnapshot();
    const transitionWrapper = mediaWrapper.find('Transition');
    expect(transitionWrapper).toHaveLength(3);
    transitionWrapper.forEach((node, index) => {
      expect(node.shallow()).toMatchSnapshot();
    });
  });
});
