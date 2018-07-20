// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title5 } from '../Heading';

describe('Title5 Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title5>Content</Title5>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
