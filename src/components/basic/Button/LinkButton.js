// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  ariaLabel: string,
  onClick: (ev: SyntheticEvent<HTMLButtonElement>) => void,
  children: React.Node,
};

const LinkButton = ({ ariaLabel, className, onClick, children }: Props) => (
  <a role="button" aria-label={ariaLabel} className={className} onClick={onClick}>
    {children}
  </a>
);

LinkButton.displayName = 'BasicLinkButton';

LinkButton.propTypes = {
  className: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = {
  display: 'inline-block',
};

export default withStyles(styles, 'BasicLinkButton')(LinkButton);
