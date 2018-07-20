// @flow
import { Title1 } from '../../../basic/Heading';
import withStyles from '../../../styles/withStyles';

const styles = {
  margin: '1em',
  textAlign: 'center',
  fontWeight: '700',
};

export default withStyles(styles, 'ArticleTitle')(Title1);
