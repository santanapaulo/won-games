import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as s from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  children,
  icon,
  fullWidth = false,
  size = 'medium',
  ...rest
}: ButtonProps) => {
  return (
    <s.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </s.Wrapper>
  );
};

export default Button;
