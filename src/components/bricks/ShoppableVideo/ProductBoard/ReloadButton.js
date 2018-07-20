// @flow
import React from 'react';
import PropTypes from 'prop-types';

import { IconButton as BasicIconButton } from '../../../basic/Button';
import RepeatIcon from '../../../basic/Icon/RepeatIcon';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  width: '100%',
  height: 'auto',
  [theme.breakpoints.min('sm')]: {
    width: '40px',
    height: '40px',
  },
});

const IconButton = withStyles(styles, 'ShoppableVideoProductBoardReloadButton')(BasicIconButton);

type Props = {
  id?: string,
  handleClick: (ev: SyntheticEvent<HTMLButtonElement>) => void,
};

const ReloadButton = ({ id, handleClick }: Props) => (
  <IconButton onClick={handleClick} color="#808080" backgroundColor="rgba(255, 255, 255, 0.5)">
    <RepeatIcon id={id} />
  </IconButton>
);

ReloadButton.propTypes = {
  id: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ReloadButton;
