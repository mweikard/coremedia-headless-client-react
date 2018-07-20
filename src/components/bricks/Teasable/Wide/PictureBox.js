// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  width: '100%',
  [theme.breakpoints.min('sm')]: {
    width: '50%',
  },
});

export default withStyles(styles, 'TeaserWidePictureBox')(Box);
