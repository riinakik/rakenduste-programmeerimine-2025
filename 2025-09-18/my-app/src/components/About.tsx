import {
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 480, mx: "auto" }}>
        <Typography variant="h4" gutterBottom>
          Riina Kikkas
        </Typography>

        <Typography variant="h6" gutterBottom>
          My Hobbies
        </Typography>

        <List
          disablePadding
          sx={{
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

        <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
          Contact me
        </Typography>

        <Stack spacing={2}>
          <TextField label="E-mail" type="email" required fullWidth />
          <TextField label="Message" multiline minRows={4} required fullWidth />
          <Button type="submit" variant="contained" fullWidth>
            SEND
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
