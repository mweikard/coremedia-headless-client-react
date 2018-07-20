// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  height: '100%',
  transition: 'transform 0.45s ease-out',
  [theme.breakpoints.min('sm')]: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    transform: 'unset',
    justifyContent: 'center',
    alignContent: props.productboardOverflow ? 'flex-start' : 'center',
  },
});

export default withStyles(styles, 'ShoppableVideoProductBoardContainer')(Box);
