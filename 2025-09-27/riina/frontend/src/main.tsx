import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";

// sinu kaks lehte
import Todos from "./components/Todo";
import AdminTodo from "./components/AdminTodo";

import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* My Tasks */}
            <Route index element={<Todos />} />

            {/* Admin */}
            <Route path="admin" element={<AdminTodo />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);
