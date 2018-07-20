// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  padding: '2rem',
  [theme.breakpoints.min('sm')]: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export default withStyles(styles, 'TeaserWideTextBoxWrapper')(Box);
