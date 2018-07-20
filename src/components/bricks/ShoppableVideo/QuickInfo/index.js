// @flow
import React from 'react';
import PropTypes from 'prop-types';
//import { injectGlobal } from 'styled-components';

import Modal from './Modal';
import Picture from '../../Picture';
import CloseButton from './CloseButton';
import ContentBox from './ContentBox';
import ProductInfo from './ProductInfo';
import ProductBox from './ProductBox';
import PriceInfo from './PriceInfo';
import Description from './Description';
import { Title3 } from '../../../basic/Heading';
import { Button } from '../../../basic/Button';

/*injectGlobal`
  .ReactModal__Body--open {
    overflow: hidden;
  }
`;*/

type Props = {
  item: ?Object,
  ratio?: string,
  handleClose: (ev: SyntheticEvent<HTMLButtonElement>) => void,
};

const QuickInfo = ({ item, ratio = 'quickview_ratio5x6', handleClose }: Props) => (
  <Modal isOpen={!!item} contentLabel={item && item.teaserTitle} onRequestClose={handleClose}>
    <CloseButton handleClick={handleClose} />
    {item && (
      <ContentBox>
        <Title3>{item.teaserTitle}</Title3>
        <ProductBox>
          <Picture
            link={item.pictureLink}
            ratio={ratio}
            title={item.pictureTitle}
            alt={item.pictureAlt}
          />
          <ProductInfo>
            <Description>{item.teaserText}</Description>
            <PriceInfo>{`${item.teaserTitle} EUR ${item.price}`}</PriceInfo>
            <Button>order</Button>
          </ProductInfo>
        </ProductBox>
      </ContentBox>
    )}
  </Modal>
);

QuickInfo.propTypes = {
  item: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
};

export default QuickInfo;
