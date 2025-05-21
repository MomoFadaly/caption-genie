import { createGlobalStyle } from 'styled-components';
import type { Theme } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: 16px;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  main {
    flex: 1;
    padding: ${({ theme }) => theme.spacing.lg};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.short};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  p {
    margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.disabled};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export default GlobalStyles; 