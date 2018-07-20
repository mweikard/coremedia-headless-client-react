// @flow
import PropTypes from 'prop-types';

import { LinkButton } from '../../../basic/Button';
import withStyles from '../../../styles/withStyles';

const styles = {
  width: '100%',
};

const Wrapper = withStyles(styles, 'ShoppableVideoProductCardLinkButton')(LinkButton);

Wrapper.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
