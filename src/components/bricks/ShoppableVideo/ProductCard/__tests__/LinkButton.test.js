// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import LinkButton from '../LinkButton';

describe('LinkButton Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<LinkButton ariaLabel="label name">Content</LinkButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
