// @flow
import React from 'react';
import renderer from 'react-test-renderer';

import FetchContext from '../FetchContext';

describe('FetchContext', () => {
  it('should render correctly with default value', () => {
    const tree = renderer
      .create(<FetchContext.Consumer>{value => value}</FetchContext.Consumer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly with provided value', () => {
    const tree = renderer
      .create(
        <FetchContext.Provider value="TEST">
          <FetchContext.Consumer>{value => value}</FetchContext.Consumer>
        </FetchContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
