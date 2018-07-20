// @flow
import { Button } from '../../basic/Button/';
import { getColors } from '../../styles/utils';
import withStyles from '../../styles/withStyles';

const styles = (theme, props) => ({
  marginTop: '1rem',
  color: getColors(theme.palette, props.color).text,
});

export default withStyles(styles, 'CTA')(Button);
