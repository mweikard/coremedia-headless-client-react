// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};

const P = ({ className, children }: Props) => <p className={className}>{children}</p>;

P.displayName = 'BasicParagraph';

P.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = (theme, props) => ({
  ...theme.typography.body1,
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

export default withStyles(styles, 'BasicParagraph')(P);
