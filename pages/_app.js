import React from 'react';
import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { IntlProvider } from 'react-intl';
import theme from '../lib/theme';

// Import fonts
import regulatWoff from '../public/static/fonts/inter/Inter-Regular.woff';
import regulatWoff2 from '../public/static/fonts/inter/Inter-Regular.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url(${regulatWoff2}) format("woff2"),
      url(${regulatWoff}) format("woff");
  }

  body {
    font-family: 'Inter', 'Inter-Black', 'Inter UI', 'Inter-UI', DejaVuSans, sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.025em;
  }
`;

class OpenCollectiveFrontendApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <IntlProvider locale="en">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default OpenCollectiveFrontendApp;
