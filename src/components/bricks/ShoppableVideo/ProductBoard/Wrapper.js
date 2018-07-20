// @flow
// import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { getColors } from '../../../styles/utils';

const fadeIn = keyframes`
  from {
    opacity 0;
  }

  to {
    opacity 1;
  }
`;

const ProductBoardWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.palette.surface.color};
  overflow-x: scroll;
  overflow-y: hidden;
  direction: rtl;
  border-width: 3px 0;
  border-style: solid none;
  border-color: ${props => getColors(props.theme.palette, props.color).color};
  padding: 7px;
  animation: ${fadeIn} 0.6s linear;
  ${props => props.theme.breakpoints.min('sm')} {
    display: initial;
    overflow-x: hidden;
    overflow-y: scroll;
    direction: ltr;
  }
`;

ProductBoardWrapper.displayName = 'ProductBoardWrapper';

/*ProductBoardWrapper.propTypes = {
  theme: PropTypes.shape({
    breakpoints: PropTypes.shape({
      min: PropTypes.func.isRequired,
    }).isRequired,
  }),
};*/

ProductBoardWrapper.defaultProps = {
  color: 'primary',
  theme: {
    breakpoints: {
      min: () => `@media (min-width:${768 / 16}em)`,
    },
    palette: {
      surface: {
        color: '#fff',
      },
      primary: {
        color: 'rgb(0, 108, 174)',
        text: 'rgba(255,255,255,0.87)',
      },
    },
  },
};

export default ProductBoardWrapper;
