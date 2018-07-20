// @flow
import PropTypes from 'prop-types';

import { LinkButton } from '../../../basic/Button';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  opacity: props.active ? 1 : 0.4,
  transition: 'opacity 0.3s linear 0.3s',
});

const Wrapper = withStyles(styles, 'ShoppableVideoProductCardLinkButton')(LinkButton);

Wrapper.propTypes = {
  active: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
