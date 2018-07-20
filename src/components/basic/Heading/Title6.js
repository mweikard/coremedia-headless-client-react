// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};
const Title6 = ({ className, children }: Props) => <h6 className={className}>{children}</h6>;

Title6.displayName = 'BasicTitle6';

Title6.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => theme.typography.title6;

export default withStyles(styles, 'BasicTitle6')(Title6);
