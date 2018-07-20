// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  url: string,
  children: React.Node,
};

const Link = ({ className, url, children }: Props) => (
  <a className={className} href={url}>
    {children}
  </a>
);

Link.displayName = 'BasicLink';

Link.propTypes = {
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = {
  cursor: 'pointer',
  textDecoration: 'none',
  background: 'transparent',
  '&:hover': {
    outline: 0,
    textDecoration: 'underline',
  },
};

export default withStyles(styles, 'BasicLink')(Link);
