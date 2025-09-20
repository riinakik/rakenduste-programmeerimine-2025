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
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
