// @flow
import * as React from 'react';

import Subheader from './Subheader';
import Box from './Box';

type Props = {
  color?: string,
  children: React.Node,
};

const Abstract = ({ color, children }: Props) => (
  <Box color={color}>
    <Subheader color={color}>
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </Subheader>
  </Box>
);

export default Abstract;
