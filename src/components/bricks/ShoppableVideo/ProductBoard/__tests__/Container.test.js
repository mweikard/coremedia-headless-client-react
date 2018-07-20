// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Container from '../Container';

describe('Container Component', () => {
  it('should render correctly without overflow', () => {
    const tree = renderer
      .create(<Container productboardOverflow={false}>Content</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly with overflow', () => {
    const tree = renderer
      .create(<Container productboardOverflow={true}>Content</Container>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
