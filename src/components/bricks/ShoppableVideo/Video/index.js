// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

import VideoBox from './Box';
import { Teaser } from '../../Video';

type Props = {
  show: boolean,
  link: string,
  playing?: boolean,
  autoplay?: boolean,
  loop?: boolean,
  mute?: boolean,
  hideControls?: boolean,
  pictureLink?: string,
  pictureTitle?: string,
  pictureAlt?: string,
  ratio?: string,
  handleProgress?: (playedSeconds: number) => void,
  handlePlay?: () => void,
  handlePause?: () => void,
  handleEnded?: () => void,
  handleDuration?: (duration: number) => void,
};

class Video extends React.Component<Props> {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    playing: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    mute: PropTypes.bool,
    hideControls: PropTypes.bool,
    pictureLink: PropTypes.string,
    pictureTitle: PropTypes.string,
    pictureAlt: PropTypes.string,
    ratio: PropTypes.string,
    handleProgress: PropTypes.func,
    handlePlay: PropTypes.func,
    handlePause: PropTypes.func,
    handleEnded: PropTypes.func,
    handleDuration: PropTypes.func,
  };

  shouldComponentUpdate(nextProps: Props) {
    if (
      this.props.show !== nextProps.show ||
      this.props.link !== nextProps.link ||
      this.props.playing !== nextProps.playing ||
      this.props.autoplay !== nextProps.autoplay ||
      this.props.loop !== nextProps.loop ||
      this.props.mute !== nextProps.mute ||
      this.props.hideControls !== nextProps.hideControls ||
      this.props.pictureLink !== nextProps.pictureLink ||
      this.props.pictureTitle !== nextProps.pictureTitle ||
      this.props.pictureAlt !== nextProps.pictureAlt ||
      this.props.ratio !== nextProps.ratio
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      show,
      link,
      playing,
      autoplay,
      loop,
      mute,
      hideControls,
      pictureLink,
      pictureTitle,
      pictureAlt,
      ratio,
      handleProgress,
      handlePlay,
      handlePause,
      handleEnded,
      handleDuration,
    } = this.props;

    return (
      <VideoBox show={show}>
        <Teaser
          link={link}
          playing={playing}
          autoplay={autoplay}
          loop={loop}
          mute={mute}
          hideControls={hideControls}
          pictureLink={pictureLink}
          pictureTitle={pictureTitle}
          pictureAlt={pictureAlt}
          ratio={ratio}
          handleProgress={handleProgress}
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleEnded={handleEnded}
          handleDuration={handleDuration}
        />
      </VideoBox>
    );
  }
}

export default Video;
