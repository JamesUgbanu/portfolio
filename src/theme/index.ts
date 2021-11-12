import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import palette from './palette';

const theme = responsiveFontSizes(
  createTheme({
    palette,
    // layout: {
    //     contentWidth: 1140,
    // },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: 'Lato',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          containedSecondary: {
            // Some CSS
            color: 'white',
          },
        },
      },
    },
  }),
);
export default theme;
