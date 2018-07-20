// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};
const Title5 = ({ className, children }: Props) => <h5 className={className}>{children}</h5>;

Title5.displayName = 'BasicTitle5';

Title5.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => theme.typography.title5;

export default withStyles(styles, 'BasicTitle5')(Title5);
