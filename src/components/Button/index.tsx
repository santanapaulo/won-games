import React from 'react';

import * as s from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  icon,
  fullWidth = false,
  size = 'medium',
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <s.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </s.Wrapper>
  );
};

export default Button;
