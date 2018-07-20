// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import { Title1 as BaseTitle1, Title3 as BaseTitle3 } from '../../../basic/Heading';
import { getColors } from '../../../styles/utils';
import withStyles from '../../../styles/withStyles';

const styles = (theme, props) => ({
  color: props => getColors(theme.palette, props.color).text,
});

const Title1 = withStyles(styles, 'TeaserOverlayTitle1')(BaseTitle1);

const Title3 = withStyles(styles, 'TeaserOverlayTitle3')(BaseTitle3);

type Props = {
  variant: string,
  color?: string,
  children: React.Node,
};

const Title = ({ variant, color, children }: Props) => {
  const Component = variant === 'hero' ? Title1 : Title3;
  return <Component color={color}>{children}</Component>;
};

Title.displayName = 'Title';

Title.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Title;
