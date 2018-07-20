// @flow
import React from 'react';

import CTA from '..';

describe('CTA Component', () => {
  it('should render CTA using Button', () => {
    const wrapper = shallow(<CTA label="Label" />);
    expect(wrapper).toMatchSnapshot();
  });
});
