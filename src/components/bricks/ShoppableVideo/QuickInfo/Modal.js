// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReactModalAdapter from './ReactModalAdapter';

const Modal = styled(ReactModalAdapter).attrs({
  overlayClassName: {
    base: 'cm-overlay',
    afterOpen: 'cm-overlay--after-open',
    beforeClose: 'cm-overlay--before-close',
  },
  modalClassName: {
    base: 'cm-modal',
    afterOpen: 'cm-modal--after-open',
    beforeClose: 'cm-modal--before-close',
  },
  closeTimeoutMS: 200,
})`
  .cm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.palette.overlay.color};
    cursor: pointer;
    z-index: 99999;
    opacity: 0;
    &--after-open {
      opacity: 1;
      transition: opacity 150ms ease-out;
    }
    &--before-close {
      opacity: 0;
      transition: opacity 150ms ease-in;
    }
  }
  .cm-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.surface.color};
    box-sizing: content-box;
    cursor: default;
    z-index: 99999;
    transform: scale(0.5);
    &--after-open {
      transform: scale(1);
      transition: all 150ms ease-out;
    }
    &--before-close {
      transform: scale(0.5);
      transition: all 150ms ease-in;
    }
    ${props => props.theme.breakpoints.min('sm')} {
      top: 50%;
      left: 50%;
      width: 550px;
      height: auto;
      min-height: 365px;
      transform: translate(-50%, -50%) scale(0.5);
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.32);
      &--after-open {
        transform: translate(-50%, -50%) scale(1);
        transition: all 150ms ease-out;
      }
      &--before-close {
        transform: translate(-50%, -50%) scale(0.5);
        transition: all 150ms ease-in;
      }
    }
  }
`;

Modal.displayName = 'Modal';

Modal.propTypes = {
  theme: PropTypes.shape({
    breakpoints: PropTypes.shape({
      min: PropTypes.func.isRequired,
    }).isRequired,
  }),
};

Modal.defaultProps = {
  theme: {
    breakpoints: {
      min: () => `@media (min-width:${768 / 16}em)`,
    },
    palette: {
      surface: {
        color: '#fff',
      },
      overlay: {
        color: 'rgba(173,173,173,0.9)',
      },
    },
  },
};

export default Modal;
