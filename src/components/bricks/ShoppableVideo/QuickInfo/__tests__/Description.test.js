// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Description from '../Description';

describe('Description Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Description>Content</Description>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
