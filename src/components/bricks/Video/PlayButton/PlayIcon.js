// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../../styles/withStyles';

const encodedPlayIcon = window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <circle
      cx="256"
      cy="256"
      r="231"
      fill="rgba(0,0,0,.5)"
      stroke="#fff"
      stroke-width="30"
      stroke-miterlimit="10"
    />
    <path
      d="M348.1 245.6l-134-78.2c-12.2-7.1-22.1-1.4-22 12.7l.7 155.2c.1 14.1 10 19.9 22.3 12.8l133-76.8c12.2-7.1 12.3-18.6 0-25.7z"
      fill="#fff"
    />
  </svg>`);

type Props = {
  className: string,
  onClick: () => void,
  children: React.Node,
};

const PlayIcon = ({ className, onClick, children }: Props) => (
  <div onClick={onClick} className={className}>
    {children}
  </div>
);

PlayIcon.displayName = 'VideoPlayIcon';

PlayIcon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const styles = (theme, props) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  cursor: 'pointer',
  position: 'absolute',
  bottom: '50%',
  right: '50%',
  transform: 'translate(50%, 50%)',
  zIndex: 1,
  width: '90px',
  height: '90px',
  maxWidth: '75%',
  maxHeight: '75%',
  background: `transparent url(data:image/svg+xml;base64,${encodedPlayIcon}) no-repeat`,
  transition: 'all 0.35s ease(in-out-quad)',
  [theme.breakpoints.min('md')]: {
    width: '120px',
    height: '120px',
  },
});

export default withStyles(styles, 'VideoPlayIcon')(PlayIcon);
