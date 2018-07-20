// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 5px',
};

export default withStyles(styles, 'ShoppableVideoProductCardProductInfo')(Box);
