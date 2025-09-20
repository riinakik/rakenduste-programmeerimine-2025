import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
} from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
        <Paper sx={{ p: 5, borderRadius: 1 }} elevation={4}>
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
              listStylePosition: "inside",
              m: 0,
              p: 0,
              "& .MuiListItem-root": { display: "list-item", py: 0.5 },
            }}
          >
            <ListItem>Gardening</ListItem>
            <ListItem>Architecture and history</ListItem>
            <ListItem>Playing the flute and the recorder</ListItem>
            <ListItem>Walking</ListItem>
          </List>

          <Typography variant="subtitle1" sx={{ mt: 4 }} gutterBottom>
            Contact me
          </Typography>

          <TextField
            label="E-mail"
            type="email"
            required
            fullWidth
            sx={{ mt: 1 }}
          />
          <TextField
            label="Message"
            multiline
            minRows={4}
            required
            fullWidth
            margin="normal"
          />

          <Button
            sx={{ mt: 4 }}
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
          >
            SEND
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
