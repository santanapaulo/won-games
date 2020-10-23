import React from 'react';

import * as s from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  ...rest
}: HeadingProps) => {
  return (
    <s.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      {...rest}
    >
      {children}
    </s.Wrapper>
  );
};

export default Heading;
