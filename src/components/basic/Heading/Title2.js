// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};
const Title2 = ({ className, children }: Props) => <h2 className={className}>{children}</h2>;

Title2.displayName = 'BasicTitle2';

Title2.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => theme.typography.title2;

export default withStyles(styles, 'BasicTitle2')(Title2);
