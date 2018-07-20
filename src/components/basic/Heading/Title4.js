// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};
const Title4 = ({ className, children }: Props) => <h4 className={className}>{children}</h4>;

Title4.displayName = 'BasicTitle4';

Title4.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => theme.typography.title4;

export default withStyles(styles, 'BasicTitle4')(Title4);
