import { tint } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import * as EmptyStyles from 'components/Empty/styles';

type WrapperProps = {
  isEmpty: boolean;
};

const wrapperModifiers = {
  isEmpty: (theme: DefaultTheme) => css`
    ${EmptyStyles.Wrapper} {
      padding-bottom: ${theme.spacings.medium};
    }

    ${EmptyStyles.Image} {
      max-width: 20rem;
    }

    ${EmptyStyles.Title} {
      font-size: ${theme.font.sizes.large};
    }

    ${EmptyStyles.Description} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty && wrapperModifiers.isEmpty(theme)};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};
  `}
`;

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
