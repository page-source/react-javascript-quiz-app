import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your primary color
    },
    secondary: {
      main: '#dc004e', // Your secondary color
    },
    background: {
      default: '#f5f5f5', // Default background color
      paper: '#ffffff', // Paper background color
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#757575', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto Mono, sans-serif',
    fontSize: 16, // Base font size
    h1: { fontSize: '2rem' }, // Adjust as needed
    h2: { fontSize: '1.75rem' },
    h3: { fontSize: '1.5rem' },
    h4: { fontSize: '1.2rem' },
    body1: {
      fontSize: '1rem', // Adjust body text size for base
      '@media (max-width:600px)': { fontSize: '0.875rem' }, // For small screens
      '@media (max-width:900px)': { fontSize: '0.95rem' }, // For tablets
    },
    body2: {
      fontSize: '0.875rem', // Adjust secondary body text size for base
      '@media (max-width:600px)': { fontSize: '0.8rem' }, // For small screens
      '@media (max-width:900px)': { fontSize: '0.9rem' }, // For tablets
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'ul, li': {
          fontFamily: 'Roboto Mono, sans-serif', // Ensure ul and li use Roboto Mono
          margin: 0, // Optional: Reset margin for ul and li
          padding: 0, // Optional: Reset padding for ul and li
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
