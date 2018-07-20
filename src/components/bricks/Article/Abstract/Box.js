// @flow
import { em } from 'polished';

import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';
import { getColors } from '../../../styles/utils';

const styles = (theme, props) => ({
  padding: `${em('60px')} ${em('30px')}`,
  color: getColors(theme.palette, props.color).text,
  backgroundColor: getColors(theme.palette, props.color).color,
});

export default withStyles(styles, 'ArticleAbstractBox')(Box);
