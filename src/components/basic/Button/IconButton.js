// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void,
  tabIndex?: number,
  children: React.Node,
};

const IconButton = ({ className, onClick, tabIndex, children }: Props) => (
  <button type="button" tabIndex={tabIndex} className={className} onClick={onClick}>
    {children}
  </button>
);

IconButton.displayName = 'BaseIconButton';

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const styles = (theme, props) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  padding: '7px',
  margin: 0,
  borderStyle: 'none',
  borderRadius: '50%',
  borderWidth: 0,
  outline: 'none',
  color: props.color || 'inherit',
  backgroundColor: props.backgroundColor || 'transparent',
  cursor: 'pointer',
});

const Wrapper = withStyles(styles, 'BaseIconButton')(IconButton);

Wrapper.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Wrapper;
