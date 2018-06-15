// @flow
import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import memoize from 'memoize-one';

import Wrapper from './Wrapper';
import ThumbnailBar from './ThumbnailBar';
import Video from './Video';
import ProductBoard from './ProductBoard';
import QuickInfo from './QuickInfo';

type Props = {
  link: string,
  autoplay?: boolean,
  loop?: boolean,
  mute?: boolean,
  hideControls?: boolean,
  pictureLink?: string,
  pictureTitle?: string,
  pictureAlt?: string,
  timeLine: Object,
};

type State = {
  wrapper: {
    width: number,
  },
  video: {
    playing: boolean,
    ended: boolean,
    pausedByModal: boolean,
    duration: number,
  },
  thumbnailBar: {
    currentIndex: number,
    range: number,
    prevItems: number,
    selectedItem: ?Object,
    thumbWidth: number,
    translateX: number,
  },
  productBoard: {
    overflow: boolean,
    display: boolean,
  },
  data: {
    prevTimeLine: ?Object,
    sequences: Array<Object>,
    numberOfItems: number,
  },
};

class ShoppableVideoBrick extends React.PureComponent<Props, State> {
  static propTypes = {
    link: PropTypes.string.isRequired,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    mute: PropTypes.bool,
    hideControls: PropTypes.bool,
    pictureLink: PropTypes.string,
    pictureTitle: PropTypes.string,
    pictureAlt: PropTypes.string,
    timeLine: PropTypes.object,
  };

  static defaultProps = {
    autoplay: false,
    loop: false,
    mute: false,
    hideControls: false,
  };

  state = {
    wrapper: {
      width: 0,
    },
    video: {
      playing: !!this.props.autoplay,
      ended: false,
      pausedByModal: false,
      duration: 0,
    },
    thumbnailBar: {
      currentIndex: -1,
      range: 0,
      prevItems: 0,
      selectedItem: null,
      thumbWidth: 0,
      translateX: 0,
    },
    productBoard: {
      overflow: false,
      display: false,
    },
    data: {
      prevTimeLine: null,
      sequences: [],
      numberOfItems: 0,
    },
  };

  _resizeTimer = null;
  _intervalId = null;
  _debounceResize = null;
  _wrapper = null;
  _thumbnailsBox = null;
  _productboardContainer = null;

  _getThumbsTranslate = (factor: number): number => {
    const { wrapper, thumbnailBar } = this.state;

    if (this._thumbnailsBox) {
      if (this._thumbnailsBox.scrollWidth <= wrapper.width || wrapper.width <= 0) {
        return 0;
      }
      const totalScroll = this._thumbnailsBox.scrollWidth - wrapper.width;
      const factorScroll = factor * thumbnailBar.thumbWidth - wrapper.width * 0.5;

      return factorScroll < 0 ? 0 : (factorScroll < totalScroll ? factorScroll : totalScroll) * -1;
    }
    return 0;
  };

  _updateThumbnailTranslate = () => {
    const { prevItems, range } = this.state.thumbnailBar;
    if (prevItems === 0) {
      this.setState(prevState => ({ thumbnailBar: { ...prevState.thumbnailBar, translateX: 0 } }));
    } else {
      const factor = prevItems + range * 0.5;
      const translateX = this._getThumbsTranslate(factor);
      this.setState(prevState => ({ thumbnailBar: { ...prevState.thumbnailBar, translateX } }));
    }
  };

  _hasProductBoardOverflow = () => {
    if (this._productboardContainer) {
      const { offsetHeight, scrollHeight } = this._productboardContainer;
      return offsetHeight < scrollHeight;
    }
    return false;
  };

  _updateProductBoardOverflow = () => {
    const overflow = this._hasProductBoardOverflow();
    this.setState(prevState => ({
      productBoard: {
        ...prevState.productBoard,
        overflow,
      },
    }));
  };

  _updateShoppableWrapperWidth = () => {
    if (this._wrapper) {
      const width = this._wrapper.offsetWidth;
      this.setState(prevState => ({
        wrapper: {
          ...prevState.wrapper,
          width,
        },
      }));
    }
  };

  _updateThumbWidth = () => {
    if (this._thumbnailsBox && this.state.data.numberOfItems) {
      const thumbWidth = this._thumbnailsBox.scrollWidth / this.state.data.numberOfItems;
      this.setState(prevState => ({ thumbnailBar: { ...prevState.thumbnailBar, thumbWidth } }));
    }
  };

  _createThumbnailProps = (
    index: number,
    item: Object,
    videoEnded: boolean,
    selectedItemId: string,
    currentIndex: number
  ) => {
    const id = `${item._id}_${index}`;
    const props = {
      id,
      active: (selectedItemId === id || index === currentIndex) && !videoEnded,
      teaserTitle: item.teaserTitle,
      teaserText: item.teaserText,
      pictureLink: item.picture.link,
      pictureTitle: item.picture.title,
      pictureAlt: item.picture.alt,
      price: item.price,
    };
    return {
      ...props,
      handleClick: (ev: SyntheticEvent<HTMLButtonElement>) =>
        this.setState(prevState => ({
          thumbnailBar: {
            ...prevState.thumbnailBar,
            selectedItem: props,
          },
          video: {
            ...prevState.video,
            playing: false,
            pausedByModal: prevState.video.playing,
          },
        })),
    };
  };

  _handleProgress = (playedSeconds: number) => {
    const { video, data } = this.state;
    const filtered = data.sequences.filter(
      ({ startTimeMillis }) => !!playedSeconds && startTimeMillis / 1000 <= playedSeconds
    );
    const prevItems = filtered
      .slice(0, -1)
      .reduce((acc, item) => acc + (item.target.items ? item.target.items.length : 1), 0);
    const current = filtered.length ? filtered.pop() : undefined;
    const currentIndex = !current ? -1 : current.index;
    const range = !current ? 0 : current.target.items ? current.target.items.length : 1;

    const productBoardDisplay = !!video.duration && video.duration - playedSeconds <= 1;
    const productBoardOverflow = productBoardDisplay && this._hasProductBoardOverflow();

    this.setState(prevState => ({
      thumbnailBar: {
        ...prevState.thumbnailBar,
        currentIndex,
        range,
        prevItems,
      },
      productBoard: {
        ...prevState.productBoard,
        display: productBoardDisplay,
        overflow: productBoardOverflow,
      },
    }));
  };

  _handleDuration = (duration: number) => {
    this.setState(prevState => ({
      video: {
        ...prevState.video,
        duration,
      },
    }));
  };

  _handlePlay = () => {
    this.setState(prevState => ({
      video: {
        ...prevState.video,
        playing: true,
        ended: false,
      },
    }));
  };

  _handlePause = () => {
    this.setState(prevState => ({
      video: {
        ...prevState.video,
        playing: false,
      },
    }));
  };

  _handleEnded = () => {
    this.setState(prevState => ({
      video: {
        ...prevState.video,
        ended: true,
      },
    }));
  };

  _handleResize = () => {
    // delay initial resize to get the accurate this._shoppableWrapper height/width
    this._resizeTimer = window.setTimeout(() => {
      this._updateShoppableWrapperWidth();
      this._updateThumbWidth();
      this._updateThumbnailTranslate();
      this._updateProductBoardOverflow();
    }, 50);
  };

  _handleCloseQuickInfo = (ev: SyntheticEvent<HTMLButtonElement>) =>
    this.setState(prevState => ({
      thumbnailBar: {
        ...prevState.thumbnailBar,
        selectedItem: null,
      },
      video: {
        ...prevState.video,
        playing: prevState.video.pausedByModal,
        pausedByModal: false,
      },
    }));

  _handleWrapperRef = (el: ?HTMLElement) => (this._wrapper = el);

  _handleThumbnailsBoxRef = (el: ?HTMLElement) => (this._thumbnailsBox = el);

  _handleProductboardContainerRef = (el: ?HTMLElement) => (this._productboardContainer = el);

  _getThumbnails = memoize((sequences, videoEnded, selectedItemId, currentIndex) =>
    sequences
      .map(({ index, target }: { index: number, target: Object }) => {
        if (target.items) {
          return target.items.map(item =>
            this._createThumbnailProps(index, item, videoEnded, selectedItemId, currentIndex)
          );
        }
        return [
          this._createThumbnailProps(index, target, videoEnded, selectedItemId, currentIndex),
        ];
      })
      .reduce((acc, item) => acc.concat(item), [])
  );

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.timeLine !== state.data.prevTimeLine) {
      if (props.timeLine && Array.isArray(props.timeLine.sequences)) {
        const sequences = props.timeLine.sequences
          .sort((a, b) => a.startTimeMillis - b.startTimeMillis)
          .map((item, index) => Object.assign({}, item, { index }));

        const numberOfItems = sequences.reduce(
          (acc, item) => acc + (item.target.items ? item.target.items.length : 1),
          0
        );

        return {
          data: {
            prevTimeLine: props.timeLine,
            sequences,
            numberOfItems,
          },
        };
      }
      return {
        prevTimeLine: props.timeLine,
        sequences: [],
        numberOfItems: 0,
      };
    }
    return null;
  }

  componentDidMount() {
    // Used to update the throttle if slideDuration changes
    this._debounceResize = debounce(this._handleResize, 500);

    this._handleResize();

    window.addEventListener('resize', this._debounceResize);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.wrapper.width !== this.state.wrapper.width) {
      this._handleResize();
    } else {
      if (prevState.thumbnailBar.currentIndex !== this.state.thumbnailBar.currentIndex) {
        this._updateThumbnailTranslate();
      }
      /* if (
        this._thumbnailsBox &&
        this.state.thumbWidth !== this._thumbnailsBox.scrollWidth / this._numberOfItems
      ) {
        this._updateThumbWidth();
      } */
    }
  }

  componentWillUnmount() {
    if (this._debounceResize) {
      window.removeEventListener('resize', this._debounceResize);
      this._debounceResize && this._debounceResize.cancel();
      this._debounceResize = null;
    }

    if (this._resizeTimer) {
      window.clearTimeout(this._resizeTimer);
      this._resizeTimer = null;
    }
  }

  render() {
    const { link, loop, mute, hideControls, pictureLink, pictureTitle, pictureAlt } = this.props;
    const { video, thumbnailBar, productBoard, data } = this.state;
    const thumbnails = this._getThumbnails(
      data.sequences,
      video.ended,
      thumbnailBar.selectedItem && thumbnailBar.selectedItem.id,
      thumbnailBar.currentIndex
    );
    return (
      <Wrapper innerRef={this._handleWrapperRef}>
        <Video
          show={!productBoard.display}
          link={link}
          playing={video.playing}
          loop={loop}
          mute={mute}
          hideControls={hideControls}
          pictureLink={pictureLink}
          pictureTitle={pictureTitle}
          pictureAlt={pictureAlt}
          handleProgress={this._handleProgress}
          handlePlay={this._handlePlay}
          handlePause={this._handlePause}
          handleEnded={this._handleEnded}
          handleDuration={this._handleDuration}
        />
        <ThumbnailBar
          translateX={thumbnailBar.translateX}
          thumbnails={thumbnails}
          handleRef={this._handleThumbnailsBoxRef}
          prevItems={thumbnailBar.prevItems}
          range={thumbnailBar.range}
          thumbWidth={thumbnailBar.thumbWidth}
        />
        {productBoard.display && (
          <ProductBoard
            thumbnails={thumbnails}
            productboardOverflow={productBoard.overflow}
            handleRef={this._handleProductboardContainerRef}
            handleReplay={this._handlePlay}
          />
        )}
        <QuickInfo item={thumbnailBar.selectedItem} handleClose={this._handleCloseQuickInfo} />
      </Wrapper>
    );
  }
}

export { ShoppableVideoBrick as Teaser };
