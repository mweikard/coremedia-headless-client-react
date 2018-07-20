// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title2 } from '../Heading';

describe('Title2 Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title2>Content</Title2>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
