export const lightTheme = {
  colors: {
    primary: '#3498db',
    secondary: '#2980b9',
    accent: '#e74c3c',
    background: '#f9f9f9',
    surface: '#ffffff',
    success: '#2ecc71',
    warning: '#f39c12',
    error: '#e74c3c',
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999',
      inverse: '#ffffff',
    },
  },
  typography: {
    fontFamily: {
      primary:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      loose: 1.8,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05)',
  },
  transitions: {
    short: '0.15s ease-in-out',
    medium: '0.25s ease-in-out',
    long: '0.5s ease-in-out',
  },
  zIndex: {
    modal: 1000,
    overlay: 900,
    dropdown: 800,
    header: 700,
    footer: 600,
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
};

export const darkTheme = {
  colors: {
    primary: '#3498db',
    secondary: '#2980b9',
    accent: '#e74c3c',
    background: '#121212',
    surface: '#1e1e1e',
    success: '#2ecc71',
    warning: '#f39c12',
    error: '#e74c3c',
    text: {
      primary: '#f5f5f5',
      secondary: '#b3b3b3',
      disabled: '#777777',
      inverse: '#121212',
    },
  },
  typography: {
    ...lightTheme.typography,
  },
  spacing: {
    ...lightTheme.spacing,
  },
  borderRadius: {
    ...lightTheme.borderRadius,
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.7)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(0, 0, 0, 0.3)',
  },
  transitions: {
    ...lightTheme.transitions,
  },
  zIndex: {
    ...lightTheme.zIndex,
  },
  breakpoints: {
    ...lightTheme.breakpoints,
  },
};

// Default theme is dark
export const theme = darkTheme;

export type Theme = typeof lightTheme;
