// @flow
import { transparentize } from 'polished';

import { Box } from '../../../basic/Box';
import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  color: getColors(theme.palette, props.color).text,
  backgroundColor: transparentize(0.3, getColors(theme.palette, props.color).color),
  overflow: 'hidden',
  padding: '1em',
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'absolute',
  width: `${props.width}%`,
  left: `${(100 - props.width) / 2}%`,
  bottom: props.bottom,
  [theme.breakpoints.min('sm')]: {
    height: props.height,
  },
});

export default withStyles(styles, 'TeaserOverlayFixedBox')(Box);
