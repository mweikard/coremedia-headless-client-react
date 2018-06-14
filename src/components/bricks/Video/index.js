// @flow
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import { TeaserBox } from '../../basic/Box';
import Picture from '../Picture';
import PosterBox from './PosterBox';
import PlayButton from './PlayButton';
import Wrapper from './Wrapper';
import MediaContext from '../../headless/Context/MediaContext';

type Props = {
  link: string,
  playing: boolean,
  autoplay: boolean,
  loop: boolean,
  mute: boolean,
  hideControls: boolean,
  pictureLink?: string,
  pictureTitle?: string,
  pictureAlt?: string,
  handleProgress?: (playedSeconds: number, played: number) => void,
  handlePlay?: () => void,
  handlePause?: () => void,
  handleEnded?: () => void,
  handleDuration?: (duration: number) => void,
};

type State = {
  playing: boolean,
  playedSeconds: number,
  duration: number,
  showPoster: boolean,
};

class VideoBrick extends React.Component<Props, State> {
  static propTypes = {
    link: PropTypes.string.isRequired,
    playing: PropTypes.bool,
    autoplay: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired,
    mute: PropTypes.bool.isRequired,
    hideControls: PropTypes.bool.isRequired,
    pictureLink: PropTypes.string,
    pictureTitle: PropTypes.string,
    pictureAlt: PropTypes.string,
    handleProgress: PropTypes.func,
    handlePlay: PropTypes.func,
    handlePause: PropTypes.func,
    handleEnded: PropTypes.func,
    handleDuration: PropTypes.func,
  };

  static defaultProps = {
    playing: false,
    autoplay: false,
    loop: false,
    mute: false,
    hideControls: false,
  };

  state = {
    playing: this.props.playing || this.props.autoplay,
    playedSeconds: 0,
    duration: 0,
    showPoster: !this.props.playing,
  };

  _handlePlay = () => {
    this.setState(prevState => ({
      playing: true,
      showPoster: false,
    }));
    if (this.props.handlePlay) {
      this.props.handlePlay();
    }
  };

  _handlePause = () => {
    this.setState(prevState => ({ playing: false }));
    if (this.props.handlePause) {
      this.props.handlePause();
    }
  };

  _handleProgress = ({ playedSeconds, played }: { playedSeconds: number, played: number }) => {
    this.setState(prevState => ({ playedSeconds }));
    if (this.props.handleProgress) {
      this.props.handleProgress(this.state.playedSeconds, played);
    }
  };

  _handleEnded = () => {
    this.setState(prevState => ({ playing: this.props.loop }));
    if (this.props.handleEnded) {
      this.props.handleEnded();
    }
  };

  _handleDuration = (duration: number) => {
    this.setState(prevState => ({ duration }));
    if (this.props.handleDuration) {
      this.props.handleDuration(duration);
    }
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.playing !== this.props.playing) {
      if (nextProps.playing) {
        this._handlePlay();
      } else {
        this._handlePause();
      }
    }
  }

  render() {
    const { link, loop, mute, hideControls, pictureLink, pictureTitle, pictureAlt } = this.props;
    const { playing, showPoster } = this.state;
    const content = [
      <MediaContext.Consumer key="player">
        {({ getMediaUrl }) => (
          <ReactPlayer
            url={getMediaUrl(link)}
            playing={playing}
            loop={loop}
            muted={mute}
            controls={!hideControls}
            onPlay={this._handlePlay}
            onPause={this._handlePause}
            onEnded={this._handleEnded}
            onProgress={this._handleProgress}
            onDuration={this._handleDuration}
            width="100%"
            height="100%"
            progressInterval={500}
          />
        )}
      </MediaContext.Consumer>,
    ];
    if (showPoster) {
      content.unshift(<PlayButton key="playbutton" handleClick={this._handlePlay} />);
      if (pictureLink) {
        content.unshift(
          <MediaContext.Consumer key="poster">
            {({ getMediaUrl }) => (
              <PosterBox>
                <Picture
                  link={pictureLink}
                  ratio="landscape_ratio16x9"
                  title={pictureTitle}
                  alt={pictureAlt}
                  stretch={true}
                />
              </PosterBox>
            )}
          </MediaContext.Consumer>
        );
      }
    }

    return (
      <Wrapper>
        <TeaserBox>{content}</TeaserBox>
      </Wrapper>
    );
  }
}

export { VideoBrick as Teaser };
