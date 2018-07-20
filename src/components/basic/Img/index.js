// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import withStyles from '../../styles/withStyles';

type Props = {
  className: string,
  alt: string,
  title?: string,
  src: string,
};

const Img = ({ className, alt, title, src, stretch, ...rest }: Props) => (
  <img className={className} src={src} alt={alt} title={title} {...rest} />
);

Img.displayName = 'BasicImg';

Img.propTypes = {
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

const styles = (theme, props) => ({
  display: 'block',
  border: 0,
  margin: 0,
  padding: 0,
  width: props.stretch ? '100%' : 'auto',
});

export default withStyles(styles, 'BasicImg')(Img);
