// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ProductBox from '../ProductBox';

describe('ProductBox Component', () => {
  it('should render correctly (entered=false)', () => {
    const tree = renderer
      .create(
        <ProductBox index={1} entered={false}>
          Content
        </ProductBox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly (entered=true)', () => {
    const tree = renderer
      .create(
        <ProductBox index={1} entered={true}>
          Content
        </ProductBox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
