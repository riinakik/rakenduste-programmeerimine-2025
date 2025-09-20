import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);
