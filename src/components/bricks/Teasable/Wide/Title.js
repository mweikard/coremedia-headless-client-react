// @flow
import { Title3 } from '../../../basic/Heading';
import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  color: props => getColors(theme.palette, props.color).text,
});

export default withStyles(styles, 'TeaserWideTitle')(Title3);
