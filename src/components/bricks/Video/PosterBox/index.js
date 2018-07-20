// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = {
  position: 'absolute',
  width: '100%',
  zIndex: 1,
};

export default withStyles(styles, 'VideoPosterBox')(Box);
