// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import MediaContext from '../MediaContext';
import createGetMediaUrl from '../../utils/createGetMediaUrl';

describe('MediaContext', () => {
  it('should render correctly with default value', () => {
    const tree = renderer
      .create(
        <MediaContext.Consumer>
          {value => value.getMediaUrl('http://localhost/image.jpg')}
        </MediaContext.Consumer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly with provided value', () => {
    const getMediaUrl = createGetMediaUrl('http://localhost', 'coremedia:///');
    const tree = renderer
      .create(
        <MediaContext.Provider value={{ getMediaUrl }}>
          <MediaContext.Consumer>
            {value => value.getMediaUrl('coremedia:///image/7564/data')}
          </MediaContext.Consumer>
        </MediaContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
