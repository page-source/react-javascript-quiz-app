import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    body: { backgroundColor: "red" }
  },
  typography: {
    fontFamily: 'Roboto Mono, sans-serif',
    fontSize: '1rem',
    h1: { fontSize: '2rem' }, // Adjust as needed
    h2: { fontSize: '1.75rem' },
    h3: { fontSize: '1.50rem' },
    h4: { fontSize: '1.5rem' },

    // Add more styles for h3, h4, etc. as necessary
    body1: { fontSize: '1rem' }, // Adjust body text size

    // Define more typography styles if needed
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

export default theme;
