// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  tabIndex?: number,
  children: React.Node,
};

const Button = ({ className, onClick, tabIndex, children }: Props) => (
  <button type="button" tabIndex={tabIndex} className={className} onClick={onClick}>
    {children}
  </button>
);

Button.displayName = 'BasicButton';

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
};

const styles = (theme, props) => ({
  color: 'inherit',
  background: 'inherit',
  margin: 0,
  border: '2px solid',
  padding: '0.5em 1em',
  textAlign: 'center',
  cursor: 'pointer',
  ...theme.typography.button,
});

export default withStyles(styles, 'BasicButton')(Button);
