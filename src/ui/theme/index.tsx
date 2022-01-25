import { teal } from '@mui/material/colors';
import { createTheme, responsiveFontSizes  } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

let theme = createTheme({
  palette: {
    primary: { 
        contrastText: '#fff',
        50: "#fff",
        100: "#eee",
        200: "#616161",
        300: "#f5f5f5",
        500: "#e0e0e0",
        700: "#424242",
        800: "#252934",
        900: "#000",
    },
    secondary: {
      contrastText: '#fff',
      ...teal
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});


theme = responsiveFontSizes(theme);
export default theme
