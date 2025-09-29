import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4272ff",
    },
    secondary: {
      main: "#42eaff",  
    },
       background: {
      default: "#ffffff", 
      paper: "#d5d5d7ff",  
    },
  },
     typography: {
    fontFamily: 'Roboto, sans-serif',

    h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 300 },
    h2: { fontFamily: 'Raleway, sans-serif', fontWeight: 300 },
    h3: { fontFamily: 'Raleway, sans-serif', fontWeight: 200 },
    h4: { fontFamily: 'Raleway, sans-serif', fontWeight: 200 },
    h5: { fontFamily: 'Raleway, sans-serif', fontWeight: 200 },
    h6: { fontFamily: 'Raleway, sans-serif', fontWeight: 200 },
  },
});

export default theme;
