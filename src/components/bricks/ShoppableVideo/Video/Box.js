// @flow
import PropTypes from 'prop-types';

import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  opacity: props.show ? 1 : 0,
  transition: 'opacity 0.6s linear 0s',
});

const Wrapper = withStyles(styles, 'ShoppableVideoVideoBox')(Box);

Wrapper.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Wrapper;
