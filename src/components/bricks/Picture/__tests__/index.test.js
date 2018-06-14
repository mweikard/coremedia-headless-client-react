// @flow
import React from 'react';

import createGetMediaUrl from '../../../headless/utils/createGetMediaUrl';

describe('Picture Component', () => {
  const context = {
    default: {
      getMediaUrl: link => link,
    },
    headless: {
      getMediaUrl: createGetMediaUrl(
        'http://127.0.0.1:8080/caas/v1/coremedia/sites/caassiopeia-en-DE',
        'coremedia:///'
      ),
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

  describe('default context', () => {
    it('should render correctly', () => {
      const Picture = getPictureWithContext();
      const wrapper = shallow(
        <Picture
          color="red"
          link="http://127.0.0.1:8080/media/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
          theme={{
            breakpoints: {
              small: 480,
              tablet: 768,
              desktop: 992,
              large: 1280,
            },
          }}
        />
      );
      expect(
        wrapper
          .shallow()
          .find('Consumer')
          .shallow()
      ).toMatchSnapshot();
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
          theme={{
            breakpoints: {
              small: 480,
              tablet: 768,
              desktop: 992,
              large: 1280,
            },
          }}
        />
      );
      expect(
        wrapper
          .shallow()
          .find('Consumer')
          .shallow()
      ).toMatchSnapshot();
    });
    it('should render correctly without <sources> element', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
          theme={{}}
        />
      );
      expect(
        wrapper
          .shallow()
          .find('Consumer')
          .shallow()
      ).toMatchSnapshot();
    });
    it('should render correctly with ratio thumbnail', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="thumbnail"
          title="Scrum"
          theme={{
            breakpoints: {
              small: 480,
              tablet: 768,
              desktop: 992,
              large: 1280,
            },
          }}
        />
      );
      expect(
        wrapper
          .shallow()
          .find('Consumer')
          .shallow()
      ).toMatchSnapshot();
    });
    it('should render correctly and skip breakpoint large', () => {
      const Picture = getPictureWithContext('headless');
      const wrapper = shallow(
        <Picture
          color="red"
          link="coremedia:///image/2662/data"
          ratio="portrait_ratio1x1"
          title="Scrum"
          theme={{
            breakpoints: {
              small: 480,
              tablet: 768,
              desktop: 992,
              large: '1280',
            },
          }}
        />
      );
      expect(
        wrapper
          .shallow()
          .find('Consumer')
          .shallow()
      ).toMatchSnapshot();
    });
  });
});
