// @flow
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

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
  ratio: string,
  handleProgress?: (playedSeconds: number) => void,
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
    playing: PropTypes.bool.isRequired,
    autoplay: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired,
    mute: PropTypes.bool.isRequired,
    hideControls: PropTypes.bool.isRequired,
    pictureLink: PropTypes.string,
    pictureTitle: PropTypes.string,
    pictureAlt: PropTypes.string,
    ratio: PropTypes.string.isRequired,
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
    ratio: 'landscape_ratio16x9',
  };

  state = {
    playing: this.props.playing || this.props.autoplay,
    playedSeconds: 0,
    duration: 0,
    showPoster: !this.props.autoplay && !this.props.playing,
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
      this.props.handleProgress(this.state.playedSeconds);
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

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (
      this.props.link !== nextProps.link ||
      this.props.loop !== nextProps.loop ||
      this.props.mute !== nextProps.mute ||
      this.props.hideControls !== nextProps.hideControls ||
      this.props.pictureLink !== nextProps.pictureLink ||
      this.props.pictureTitle !== nextProps.pictureTitle ||
      this.props.pictureAlt !== nextProps.pictureAlt ||
      this.props.ratio !== nextProps.ratio ||
      this.state.playing !== nextState.playing ||
      this.state.showPoster !== nextState.showPoster
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      link,
      loop,
      mute,
      hideControls,
      pictureLink,
      pictureTitle,
      pictureAlt,
      ratio,
    } = this.props;
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
    if (showPoster && pictureLink) {
      content.unshift(<PlayButton key="playbutton" handleClick={this._handlePlay} />);
      content.unshift(
        <PosterBox key="poster">
          <Picture
            link={pictureLink}
            ratio={ratio}
            title={pictureTitle}
            alt={pictureAlt}
            stretch={true}
          />
        </PosterBox>
      );
    }

    return <Wrapper>{content}</Wrapper>;
  }
}

export { VideoBrick as Teaser };
