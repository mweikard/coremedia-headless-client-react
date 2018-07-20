// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  display: 'inline-flex',
  flex: '0 0 auto',
  position: 'relative',
  width: '144px',
  height: '173px',
  margin: '8px',
  padding: '0 36px',
  order: props.index,
  [theme.breakpoints.min('sm')]: {
    display: 'none',
  },
});

export default withStyles(styles, 'ShoppableVideoProductBoardReloadCard')(Box);
