import { teal } from '@mui/material/colors';
import { createTheme, responsiveFontSizes  } from '@mui/material/styles';


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
  
});


theme = responsiveFontSizes(theme);
export default theme
