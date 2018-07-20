// @flow
import PropTypes from 'prop-types';

import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  flex: '0 0 auto',
  position: 'relative',
  top: props.entered ? '0' : '-20px',
  width: '144px',
  height: '256px',
  margin: '8px',
  zIndex: 5,
  textAlign: 'center',
  order: props.index,
  opacity: props.entered ? 1 : 0,
  transition: 'opacity 0.2s ease-out, top 0.6s ease-out',
  [theme.breakpoints.min('sm')]: {
    width: '134px',
    height: '258px',
    border: '1px solid #eee',
    '&:hover': {
      zIndex: 10,
    },
  },
  [theme.breakpoints.min('md')]: {
    width: '179px',
    height: '319px',
  },
  [theme.breakpoints.min('lg')]: {
    width: '237px',
    height: '368px',
  },
});

const Wrapper = withStyles(styles, 'ShoppableVideoProductCardProductBox')(Box);

Wrapper.propTypes = {
  index: PropTypes.number.isRequired,
  entered: PropTypes.bool,
};

export default Wrapper;
