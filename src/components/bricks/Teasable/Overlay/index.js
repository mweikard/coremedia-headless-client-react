// @flow
import React from 'react';
import PropTypes from 'prop-types';

import CTA from '../../CTA';
import Box from './Box';
import FixedBox from './FixedBox';
import Title from './Title';
import Subtitle from './Subtitle';
import TextBox from './TextBox';

type Props = {
  variant: string,
  fixed?: boolean,
  width: number,
  height: string,
  bottom: string,
  title?: string,
  text?: string,
  color?: string,
  ctaShow: boolean,
  ctaText?: string,
};

const Overlay = ({
  variant,
  fixed = true,
  width,
  height,
  bottom,
  title,
  text,
  color,
  ctaShow,
  ctaText,
}: Props) => {
  const textBox = (
    <TextBox>
      {title && (
        <Title variant={variant} color={color}>
          {title}
        </Title>
      )}
      {text && (
        <Subtitle color={color}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Subtitle>
      )}
      {ctaShow && ctaText && <CTA label={ctaText} color={color} />}
    </TextBox>
  );
  return fixed ? (
    <FixedBox width={width} height={height} bottom={bottom} color={color}>
      {textBox}
    </FixedBox>
  ) : (
    <Box width={width} height={height} bottom={bottom} color={color}>
      {textBox}
    </Box>
  );
};

Overlay.propTypes = {
  fixed: PropTypes.bool,
  width: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  ctaShow: PropTypes.bool,
  ctaText: PropTypes.string,
};

export default Overlay;
