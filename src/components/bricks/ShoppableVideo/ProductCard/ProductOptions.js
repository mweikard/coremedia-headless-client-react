// @flow
import { Box } from '../../../basic/Box';
//import ProductBox from './ProductBox';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  display: 'none',
  /*[theme.breakpoints.min('sm')]: {
    [`${ProductBox}:hover &`]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 10px 10px 10px',
    },
  },*/
});

export default withStyles(styles, 'ShoppableVideoProductCardProductOptions')(Box);
