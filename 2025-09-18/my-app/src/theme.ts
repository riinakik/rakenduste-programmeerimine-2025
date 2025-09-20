import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#43741bff",
    },
    secondary: {
      main: "#7ab336",  
    },
       background: {
      default: "#f9f2e5", 
      paper: "#ffffff",  
    },
  },
     typography: {
    fontFamily: 'Roboto, sans-serif',

    // Pealkirjade jaoks kasutame Raleway'd
    h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 700 },
    h2: { fontFamily: 'Raleway, sans-serif', fontWeight: 700 },
    h3: { fontFamily: 'Raleway, sans-serif', fontWeight: 700 },
    h4: { fontFamily: 'Raleway, sans-serif', fontWeight: 700 },
    h5: { fontFamily: 'Raleway, sans-serif', fontWeight: 700 },
    h6: { fontFamily: 'Raleway, sans-serif', fontWeight: 700 },
  },
});

export default theme;
