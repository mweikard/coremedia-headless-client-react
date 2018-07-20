// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};
const Title3 = ({ className, children }: Props) => <h3 className={className}>{children}</h3>;

Title3.displayName = 'BasicTitle3';

Title3.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => theme.typography.title3;

export default withStyles(styles, 'BasicTitle3')(Title3);
