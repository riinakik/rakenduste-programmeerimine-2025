import { Box, Typography, Button, Paper } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Paper sx={{ p: 5, borderRadius: 1 }} elevation={4}>
        <Typography variant="h4" color="#E69500" gutterBottom>
          Lorem Ipsum
        </Typography>

        <Typography paragraph sx={{ mb: 4 }}>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </Typography>

        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed erat eu nisl finibus feugiat. Nam in pretium purus. Etiam quis
          dapibus ipsum. Quisque feugiat blandit semper. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Phasellus id rutrum nisl, ut consectetur dolor. Pellentesque porta
          odio id odio gravida mattis.
        </Typography>

        <Typography paragraph>
          Aenean facilisis dapibus tortor, ac luctus erat. Donec facilisis
          porttitor euismod. Etiam dolor libero, consequat nec eros a, tincidunt
          posuere dolor. Sed vestibulum ultricies massa, a congue leo. Fusce ac
          urna vel felis placerat porttitor. Morbi magna tellus, semper nec
          gravida quis, commodo non leo. In semper in urna et condimentum.
          Vestibulum suscipit finibus dolor, at euismod diam sagittis nec.
          Phasellus rutrum purus id odio accumsan, nec tincidunt erat dignissim.
          Morbi vel euismod tellus, at tristique lacus. Cras nunc sapien,
          faucibus a sem at, auctor tristique magna. Mauris sodales velit sed
          accumsan efficitur. Suspendisse ac congue tellus. Suspendisse potenti.
        </Typography>

        <Typography paragraph>
          Vivamus sagittis volutpat ante. Sed id finibus nisl. Etiam nec
          ultricies odio. Sed dapibus tempor mauris sit amet cursus. Suspendisse
          eleifend dui lorem, a fringilla mi viverra luctus. Praesent id auctor
          diam. Etiam a dui facilisis, luctus turpis id, aliquet enim. Integer
          commodo ipsum sit amet nibh hendrerit, sed suscipit tortor cursus.
          Integer gravida neque ac est venenatis laoreet. Donec malesuada lectus
          in nunc iaculis semper. Morbi tempus, arcu vel iaculis laoreet, ex
          enim vulputate mi, a tincidunt orci massa in lacus. Phasellus ut nunc
          non neque facilisis gravida vel et nunc. Nulla facilisi. Aliquam
          congue justo nec luctus vestibulum.
        </Typography>

        <Typography paragraph>
          Quisque diam ex, faucibus quis scelerisque sed, feugiat a lectus.
          Pellentesque massa felis, pharetra sed rutrum eget, tincidunt vitae
          sem. Curabitur augue sem, venenatis ac ullamcorper eu, tempus eget
          mauris. Sed dolor quam, pretium tristique ante vel, faucibus sagittis
          lorem. Proin vitae molestie dolor. Morbi eget urna consectetur.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount((c) => c + 1)}
          >
            count is {count}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
