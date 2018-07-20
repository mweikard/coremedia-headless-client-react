// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import PriceInfo from '../PriceInfo';

describe('PriceInfo Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<PriceInfo>Content</PriceInfo>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
