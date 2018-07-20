// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title6 } from '../Heading';

describe('Title6 Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title6>Content</Title6>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
