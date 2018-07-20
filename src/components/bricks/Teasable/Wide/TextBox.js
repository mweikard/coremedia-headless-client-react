// @flow
import { Box } from '../../../basic/Box';
import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  color: getColors(theme.palette, props.color).text,
  backgroundColor: getColors(theme.palette, props.color).color,
  textAlign: 'center',
  [theme.breakpoints.min('sm')]: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    left: '50%',
    top: '0%',
  },
});

export default withStyles(styles, 'TeaserWideTextBox')(Box);
