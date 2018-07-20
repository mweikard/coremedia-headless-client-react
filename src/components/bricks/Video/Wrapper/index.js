// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  position: 'relative',
  cursor: 'pointer',
  width: props.width ? `${props.width}px` : '100%',
  height: props.height ? `${props.height}px` : '100%',
});

export default withStyles(styles, 'VideoWrapper')(Box);
