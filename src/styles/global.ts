import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';

type GlobalStylesProps = {
  removeBackground?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v13-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v13-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v13-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBackground }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBackground &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}
`;

export default GlobalStyles;
