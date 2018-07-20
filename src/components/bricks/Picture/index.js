// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import Img from '../../basic/Img';
import MediaContext from '../../headless/Context/MediaContext';
import type { Dimensions } from '../../../types';

const getImageSources = (
  getMediaUrl,
  link: string,
  ratio: string,
  dimensions: Dimensions
): React.Node => {
  if (!Array.isArray(dimensions)) {
    return;
  }

  const sourceList = dimensions
    .sort((a, b) => b.width - a.width) // large to small
    .map((dimension, index) => (
      <source
        key={index}
        media={`(min-width: ${dimension.width}px)`}
        srcSet={getMediaUrl(link, ratio, dimension.width)}
      />
    ));
  return sourceList;
};

type Props = {
  link: string,
  ratio: string,
  stretch?: boolean,
  title?: string,
  alt?: string,
  responsive?: boolean,
};

const PictureBrick = ({ link, ratio, stretch, title, alt, responsive = true }: Props) => (
  <MediaContext.Consumer>
    {({ getMediaUrl, imageRatios }) => {
      const { minWidth, dimensions } = (imageRatios && imageRatios[ratio]) || {};
      return responsive ? (
        <picture>
          {getImageSources(getMediaUrl, link, ratio, dimensions)}
          <Img src={getMediaUrl(link, ratio, minWidth)} alt={alt} title={title} stretch={stretch} />
        </picture>
      ) : (
        <Img src={getMediaUrl(link, ratio, minWidth)} alt={alt} title={title} stretch={stretch} />
      );
    }}
  </MediaContext.Consumer>
);

PictureBrick.propTypes = {
  link: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired,
  stretch: PropTypes.bool,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default PictureBrick;
