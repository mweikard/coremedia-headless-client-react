// @flow
// import PropTypes from 'prop-types';
import styled /*, { css }*/ from 'styled-components';

/*import ProductBox from './ProductBox';

const hoverStyles = {
  sm: css`
    left: -2.5%;
    top: -11.5%;
    width: 105%;
    height: 123%;
  `,
  md: css`
    left: -2.5%;
    top: -9.5%;
    width: 105%;
    height: 119%;
  `,
  lg: css`
    left: -2.5%;
    top: -9%;
    width: 105%;
    height: 118%;
  `,
};*/

const ProductZoom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  ${props => props.theme.breakpoints.min('sm')} {
    transition: top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out;
  }
`;

/*const ProductZoom = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  ${props => props.theme.breakpoints.min('sm')} {
    transition: top 0.1s ease-out, left 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out;
    ${ProductBox}:hover & {
      z-index: 10;
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.32);
    }
  }
  ${props =>
    ['sm', 'md', 'lg'].reduce(
      (acc, breakpoint) =>
        acc.concat(
          css`
            ${props.theme.breakpoints.min(breakpoint)} {
              ${ProductBox}:hover & {
                ${hoverStyles[breakpoint]};
              }
            }
          `
        ),
      []
    )};
`;*/

ProductZoom.displayName = 'ProductZoom';

/*ProductZoom.propTypes = {
  theme: PropTypes.shape({
    breakpoints: PropTypes.shape({
      min: PropTypes.func.isRequired,
    }).isRequired,
  }),
};*/

ProductZoom.defaultProps = {
  theme: {
    breakpoints: {
      min: (key: string) => {
        const values = {
          sm: 768,
          md: 992,
          lg: 1280,
        };
        return `@media (min-width:${values[key] / 16}em)`;
      },
    },
  },
};

export default ProductZoom;
