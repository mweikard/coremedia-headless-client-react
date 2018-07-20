// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  title: string,
  viewBox?: string,
  children: React.Node,
};

const Svg = ({ title, viewBox = '0 0 512 512', className, children }: Props) => {
  const _id = uuidv4();
  return (
    <svg className={className} role="img" viewBox={viewBox} aria-labelledby={_id}>
      <title id={_id}>{title}</title>
      {children}
    </svg>
  );
};

Svg.displayName = 'BasicIconSvg';

Svg.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const styles = (theme, props) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  width: props.size ? `${props.size}px` : '100%',
  height: props.size ? `${props.size}px` : '100%',
});

export default withStyles(styles, 'BasicIconSvg')(Svg);
