// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  lineHeight: 0,
  transition: 'all 0.6s linear 0s',
};

export default withStyles(styles, 'ShoppableVideoWrapper')(Box);
