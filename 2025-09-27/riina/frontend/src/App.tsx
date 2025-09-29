import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            {/* Vasak pool – pealkiri */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Todo App
            </Typography>

            {/* Parem pool – lingid */}
            <Box sx={{ display: "flex", gap: 4 }}>
              <Button color="inherit" component={Link} to="/">
                My Tasks
              </Button>
              <Button color="inherit" component={Link} to="/admin">
                Admin
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer, et AppBar ei kataks sisu */}
      <Toolbar />

      {/* Sisuala */}
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 6 }}>
        <Container maxWidth="sm">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
