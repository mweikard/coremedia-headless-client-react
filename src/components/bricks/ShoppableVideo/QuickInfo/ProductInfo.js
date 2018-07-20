// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 0 0 0',
  [theme.breakpoints.min('sm')]: {
    alignItems: 'start',
    padding: '10px 0 0 30px',
  },
});

export default withStyles(styles, 'ShoppableVideoQuickInfoProductInfo')(Box);
