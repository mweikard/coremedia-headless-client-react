// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  display: 'none',
  [theme.breakpoints.min('sm')]: {
    display: 'block',
    position: 'absolute',
    bottom: '3px',
    left: 0,
    zIndex: 9999,
  },
});

export default withStyles(styles, 'ShoppableVideoProductBoardReloadBox')(Box);
