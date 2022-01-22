import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { 
        light: '#1e242c',
        main: '#252934',
        dark: '#1b242f',
        contrastText: '#fff',
    },
    secondary: {
      main: '#04c2c9',
      dark: '#00a1a7',
      contrastText: '#fff',
    },
    grey: {
      100: "#f5f5f5",
      200: "#eee",
      300: "#8f9aa7",
      400: "#262f38",
      500: "#252934",
      600: "#444649"
    },
  },
  
});

export default theme