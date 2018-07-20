// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title4 } from '../Heading';

describe('Title4 Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title4>Content</Title4>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
