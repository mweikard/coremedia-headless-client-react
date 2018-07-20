// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};

const Box = React.forwardRef(({ className, children }: Props, ref) => (
  <div ref={ref} className={className}>
    {children}
  </div>
));

Box.displayName = 'BasicBox';

Box.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
};

export default withStyles(styles, 'BasicBox')(Box);
