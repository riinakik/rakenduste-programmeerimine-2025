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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          {/* React Router Link */}
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
      </AppBar>

      <Container sx={{ py: 5 }}>
        <Box sx={{ maxWidth: 1500, mx: "auto", mt: 1 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
