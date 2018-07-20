// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title3 } from '..';

describe('Title3 Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title3>Content</Title3>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
