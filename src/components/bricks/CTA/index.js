// @flow
import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

type Props = {
  label: string,
  color?: string,
};

const CTABrick = ({ label, color }: Props) => <Button color={color}>{label}</Button>;

CTABrick.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default CTABrick;
