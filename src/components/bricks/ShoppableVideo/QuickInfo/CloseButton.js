// @flow
import React from 'react';
import PropTypes from 'prop-types';

import { IconButton as BasicIconButton } from '../../../basic/Button';
import CloseIcon from '../../../basic/Icon/CloseIcon';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  position: 'absolute',
  top: '5px',
  right: '5px',
});

const IconButton = withStyles(styles, 'ShoppableVideoQuickInfoCloseButton')(BasicIconButton);

type Props = {
  color: string,
  handleClick: (ev: SyntheticEvent<HTMLButtonElement>) => void,
};

const CloseButton = ({ color, handleClick }: Props) => (
  <IconButton onClick={handleClick} color={color}>
    <CloseIcon />
  </IconButton>
);

CloseButton.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
  color: '#808080',
};

export default CloseButton;
