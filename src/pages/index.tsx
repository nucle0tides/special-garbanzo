import { css } from "@emotion/react";

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";

import Navigation from "../components/Navigation";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ position: "relative", right: "3rem" }}>
          Betsy
        </Typography>
        <Typography variant="h1" sx={{ position: "relative", left: "3.5rem" }}>
          Losen
        </Typography>
      </Box>
      <Navigation
        css={css`
          width: 100%;

          ul {
            display: flex;
            flex-direction: row;
            gap: 3rem;
            justify-content: center;
          }
        `}
      />
    </Box>
  );
};

export default Home;
