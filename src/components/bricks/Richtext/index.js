// @flow
import React from 'react';
import PropTypes from 'prop-types';
import HtmlToReact from 'html-to-react';

import { Title1, Title2, Title3, Title4, Title5, Title6 } from './Heading';
import P from './Paragraph';
import { Wrapper, PictureWrapper } from './Wrapper';
import Picture from '../Picture';
import { Link } from '../../basic/Link';

type Props = {
  text: string,
  color?: string,
};

const RichtextBrick = ({ text, color }: Props) => {
  const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
  const processingInstructions = [
    {
      shouldProcessNode: function(node) {
        return node.name === 'h1';
      },
      processNode: function(node, children, index) {
        return <Title1 key={index}>{children}</Title1>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'h2';
      },
      processNode: function(node, children, index) {
        return <Title2 key={index}>{children}</Title2>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'h3';
      },
      processNode: function(node, children, index) {
        return <Title3 key={index}>{children}</Title3>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'h4';
      },
      processNode: function(node, children, index) {
        return <Title4 key={index}>{children}</Title4>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'h5';
      },
      processNode: function(node, children, index) {
        return <Title5 key={index}>{children}</Title5>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'h6';
      },
      processNode: function(node, children, index) {
        return <Title6 key={index}>{children}</Title6>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'p';
      },
      processNode: function(node, children, index) {
        return <P key={index}>{children}</P>;
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'a';
      },
      processNode: function(node, children, index) {
        const url = node.attribs['href'];
        return (
          <Link key={index} url={url}>
            {children}
          </Link>
        );
      },
    },
    {
      shouldProcessNode: function(node) {
        return node.name === 'img';
      },
      processNode: function(node, children, index) {
        const src = node.attribs['cms-src'] || node.attribs['src'];
        const alt = node.attribs['alt'];
        return (
          <PictureWrapper key={index}>
            <Picture link={src} ratio="landscape_ratio16x9" alt={alt} stretch />
          </PictureWrapper>
        );
      },
    },
    {
      // handle all remaining nodes with default
      shouldProcessNode: function(node) {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ];

  const HtmlToReactParser = HtmlToReact.Parser;
  const htmlToReactParser = new HtmlToReactParser();
  const isValidNode = () => {
    return true;
  };
  const reactComponent = htmlToReactParser.parseWithInstructions(
    text,
    isValidNode,
    processingInstructions
  );
  return <Wrapper>{reactComponent}</Wrapper>;
};

RichtextBrick.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default RichtextBrick;
