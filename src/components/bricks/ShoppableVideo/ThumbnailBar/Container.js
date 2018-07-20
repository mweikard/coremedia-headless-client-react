// @flow
import PropTypes from 'prop-types';

import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  transform: `translateX(${props.translateX}px)`,
  transition: 'transform 0.45s ease-out',
});

const Wrapper = withStyles(styles, 'ShoppableVideoThumbnailBarContainer')(Box);

Wrapper.propTypes = {
  translateX: PropTypes.number.isRequired,
};

export default Wrapper;
