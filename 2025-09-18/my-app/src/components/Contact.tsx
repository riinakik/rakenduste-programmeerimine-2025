import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
  Grid,
} from "@mui/material";

export default function Contact() {
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Paper sx={{ p: 4, height: "100%" }} elevation={4}>
          <Typography variant="h4" gutterBottom>
            Riina Kikkas
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            My Hobbies
          </Typography>

          <List
            disablePadding
            sx={{
              typography: "body2",
              listStyleType: "disc",
              pl: 2,
              "& .MuiListItem-root": { display: "list-item", py: 0.5 },
            }}
          >
            <ListItem>Gardening</ListItem>
            <ListItem>Architecture and history</ListItem>
            <ListItem>Playing the flute and the recorder</ListItem>
            <ListItem>Walking</ListItem>
          </List>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <Paper sx={{ p: 4, height: "100%" }} elevation={4}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Contact me
          </Typography>
          <Box component="form">
            <TextField label="E-mail" type="email" required fullWidth />
            <TextField
              label="Message"
              multiline
              minRows={5}
              fullWidth
              margin="normal"
            />
            <Button
              sx={{ mt: 2 }}
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              color="secondary"
            >
              SEND
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
