// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Subtitle from '../Subtitle';

describe('Subtitle Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Subtitle>Content</Subtitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
