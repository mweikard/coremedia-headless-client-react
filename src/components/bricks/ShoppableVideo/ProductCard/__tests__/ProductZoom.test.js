// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ProductZoom from '../ProductZoom';

describe('ProductZoom Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<ProductZoom>Content</ProductZoom>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
