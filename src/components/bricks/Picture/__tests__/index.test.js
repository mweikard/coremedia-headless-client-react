// @flow
import React from 'react';

import createGetMediaUrl from '../../../headless/utils/createGetMediaUrl';

describe('Picture Component', () => {
  const imageVariantsData = {
    ratios: {
      portrait_ratio1x1: {
        minWidth: 320,
        minHeight: 320,
        widthRatio: 1,
        heightRatio: 1,
        dimensions: [
          {
            width: 320,
            height: 320,
          },
          {
            width: 480,
            height: 480,
          },
          {
            width: 768,
            height: 768,
          },
          {
            width: 992,
            height: 992,
          },
          {
            width: 1200,
            height: 1200,
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
  const context = {
    default: {
      getMediaUrl: link => link,
    },
    headless: {
      getMediaUrl: createGetMediaUrl(
        'http://127.0.0.1:8080/caas/v1/coremedia/sites/caassiopeia-en-DE',
        'coremedia:///'
      ),
      imageRatios: imageVariantsData.ratios,
    },
  };

  const getPictureWithContext = (variant = 'default') => {
    jest.doMock('../../../headless/Context/MediaContext', () => {
      return {
        Consumer: props => props.children(context[variant]),
      };
    });

    return require('..').default;
  };

  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  describe('default context', () => {
    it('should render correctly', () => {
      const Picture = getPictureWithContext();
      const wrapper = shallow(
        <Picture
          color="red"
          link="http://127.0.0.1:8080/media/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
        />
      );
      expect(wrapper.shallow()).toMatchSnapshot();
    });
  });
  describe('headless context', () => {
    it('should render correctly', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
        />
      );
      expect(wrapper.shallow()).toMatchSnapshot();
    });
    it('should render correctly without <sources> element', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
        />
      );
      expect(wrapper.shallow()).toMatchSnapshot();
    });
    it('should render correctly with responsive=false', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="thumbnail"
          title="Scrum"
          responsive={false}
        />
      );
      expect(wrapper.shallow()).toMatchSnapshot();
    });
    it('should render correctly and skip breakpoint lg', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
        />
      );
      expect(wrapper.shallow()).toMatchSnapshot();
    });
  });
});
