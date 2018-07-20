// @flow
import React from 'react';
import PropTypes from 'prop-types';

import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

type Props = {
  className: string,
};

const Bar = ({ className }: Props) => <hr aria-hidden="true" className={className} />;

Bar.displayName = 'ShoppableVideoThumbnailBarBar';

const styles = (theme, props) => ({
  position: 'relative',
  left: `${props.posX}px`,
  width: `${props.width}px`,
  margin: 0,
  borderWidth: '0 0 3px',
  borderStyle: 'none none solid',
  borderColor: props.width ? getColors(theme.palette, 'primary').color : 'transparent',
  transition: `${props.posX && props.width ? 'all' : 'border-color'} 0.6s ease-out 0s`,
});

const Wrapper = withStyles(styles, 'ShoppableVideoThumbnailBarBar')(Bar);

Wrapper.propTypes = {
  posX: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Wrapper;
