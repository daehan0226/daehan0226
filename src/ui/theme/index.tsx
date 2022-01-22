import { createTheme } from '@mui/material/styles';
import { lightBlue, lightGreen } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: { 
        light: lightBlue[300],
        main: lightBlue[600],
        dark: lightBlue[900],
        contrastText: '#fff',
    },
    secondary: {
      light: lightGreen[300],
      main: lightGreen[600],
      dark: lightGreen[900],
      contrastText: '#fff',
    },
  },
});

export default theme