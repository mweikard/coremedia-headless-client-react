// @flow
import { transparentize } from 'polished';

import { Box } from '../../../basic/Box';
import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  color: getColors(theme.palette, props.color).text,
  backgroundColor: getColors(theme.palette, props.color).color,
  position: 'relative',
  overflow: 'hidden',
  padding: '1em',
  maxWidth: '100%',
  maxHeight: '100%',
  [theme.breakpoints.min('sm')]: {
    backgroundColor: transparentize(0.3, getColors(theme.palette, props.color).color),
    position: 'absolute',
    width: `${props.width}%`,
    height: props.height,
    left: `${(100 - props.width) / 2}%`,
    bottom: props.bottom,
  },
});

export default withStyles(styles, 'TeaserOverlayBox')(Box);
