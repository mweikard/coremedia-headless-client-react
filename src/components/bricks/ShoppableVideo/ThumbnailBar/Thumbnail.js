// @flow
import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from './LinkButton';
import Picture from '../../Picture';

type Props = {
  ariaLabel: string,
  pictureLink: string,
  pictureTitle: string,
  pictureAlt: string,
  handleClick: (ev: SyntheticEvent<HTMLButtonElement>) => void,
  active: boolean,
  ratio: string,
};

class Thumbnail extends React.Component<Props> {
  static propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    pictureLink: PropTypes.string.isRequired,
    pictureTitle: PropTypes.string.isRequired,
    pictureAlt: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    ratio: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ratio: 'portrait_ratio3x4', //'thumbnail',
  };

  shouldComponentUpdate(nextProps: Props) {
    return (
      nextProps.ariaLabel !== this.props.ariaLabel ||
      nextProps.pictureLink !== this.props.pictureLink ||
      nextProps.pictureTitle !== this.props.pictureTitle ||
      nextProps.pictureAlt !== this.props.pictureAlt ||
      nextProps.active !== this.props.active
    );
  }

  render() {
    const {
      ariaLabel,
      pictureLink,
      pictureTitle,
      pictureAlt,
      handleClick,
      active,
      ratio,
    } = this.props;
    return (
      <LinkButton active={active} ariaLabel={ariaLabel} onClick={handleClick}>
        <Picture
          link={pictureLink}
          ratio={ratio}
          title={pictureTitle}
          alt={pictureAlt}
          responsive={false}
        />
      </LinkButton>
    );
  }
}

export default Thumbnail;
