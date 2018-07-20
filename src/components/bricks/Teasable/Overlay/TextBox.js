// @flow
import { Box } from '../../../basic/Box';
import withStyles from '../../../styles/withStyles';

const styles = {
  textAlign: 'center',
  '& :first-child': {
    marginTop: '0.6em',
  },
  '& :last-child': {
    marginBottom: '0.6em',
  },
};

export default withStyles(styles, 'TeaserOverlayTextBox')(Box);
