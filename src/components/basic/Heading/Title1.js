// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};
const Title1 = ({ className, children }: Props) => <h1 className={className}>{children}</h1>;

Title1.displayName = 'BasicTitle1';

Title1.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => theme.typography.title1;

export default withStyles(styles, 'BasicTitle1')(Title1);
