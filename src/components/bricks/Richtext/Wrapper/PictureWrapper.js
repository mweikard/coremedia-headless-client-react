// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../styles/withStyles';

type Props = {
  className: string,
  children: React.Node,
};

const Box = ({ className, children }: Props) => <span className={className}>{children}</span>;

Box.displayName = 'RichtextPictureWrapper';

Box.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = (theme, props) => ({
  margin: '1em 0',
  display: 'block',
  [theme.breakpoints.min('sm')]: {
    margin: '1em 1em 1em 0',
    width: '50%',
    float: 'left',
  },
});

export default withStyles(styles, 'RichtextPictureWrapper')(Box);
