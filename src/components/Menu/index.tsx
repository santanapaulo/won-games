import React, { useState } from 'react';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Close as CloseIcon } from '@styled-icons/remix-fill/Close';

import Logo from 'components/Logo';

import * as s from './styles';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';

type MenuProps = {
  username?: string;
};

const Menu = ({ username, ...rest }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <s.Wrapper {...rest}>
      <MediaMatch lessThan="medium">
        <s.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </s.IconWrapper>
      </MediaMatch>

      <s.LogoWrapper>
        <Logo hideTitle />
      </s.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <s.MenuNav>
          <s.MenuLink href="#">Home</s.MenuLink>
          <s.MenuLink href="#">Explorer</s.MenuLink>
        </s.MenuNav>
      </MediaMatch>

      <s.MenuGroup>
        <s.IconWrapper>
          <SearchIcon aria-label="Search" />
        </s.IconWrapper>
        <s.IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </s.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </s.MenuGroup>

      <s.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <s.MenuNav>
          <s.MenuLink href="#">Home</s.MenuLink>
          <s.MenuLink href="#">Explorer</s.MenuLink>

          {!!username && (
            <>
              <s.MenuLink href="#">My account</s.MenuLink>
              <s.MenuLink href="#">Wishlist</s.MenuLink>
            </>
          )}
        </s.MenuNav>

        {!username && (
          <s.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <s.CreateAccount href="#" title="Sign Up">
              Sign Up
            </s.CreateAccount>
          </s.RegisterBox>
        )}
      </s.MenuFull>
    </s.Wrapper>
  );
};

export default Menu;
