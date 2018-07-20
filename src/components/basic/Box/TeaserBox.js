// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};

const TeaserBox = ({ className, children }: Props) => <div className={className}>{children}</div>;

TeaserBox.displayName = 'BasicTeaserBox';

TeaserBox.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = {
  position: 'relative',
  border: 0,
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  '> *': {
    boxSizing: 'border-box',
  },
};

export default withStyles(styles, 'BasicTeaserBox')(TeaserBox);
