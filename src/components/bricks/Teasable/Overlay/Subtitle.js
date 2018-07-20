// @flow
import { Title6 } from '../../../basic/Heading';
import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  marginTop: '1em',
  color: getColors(theme.palette, props.color).text,
});

export default withStyles(styles, 'TeaserOverlaySubtitle')(Title6);
