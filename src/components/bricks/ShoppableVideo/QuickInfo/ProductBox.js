// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.min('sm')]: {
    flexDirection: 'row',
    alignItems: 'start',
  },
});

export default withStyles(styles, 'ShoppableVideoQuickInfoProductBox')(Box);
