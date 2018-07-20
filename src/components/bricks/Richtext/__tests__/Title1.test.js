// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Title1 } from '../Heading';

describe('Title1 Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Title1>Content</Title1>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
