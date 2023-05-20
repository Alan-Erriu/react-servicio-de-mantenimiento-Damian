import { Box, Typography, createTheme } from "@mui/material";
import { CardArticle } from "./helper/CardTitles";
import { dataTitles } from "./helper/dataTitles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "80px",
  "@media (max-width:600px)": {
    fontSize: "50px",
  },
  "@media (min-width:600px)": {
    fontSize: "60px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "80px",
  },
};

export const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "5rem",
        pt: "5rem",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          fontFamily="roboto"
          fontSize="60px"
          variant="h2"
          color="black"
          textAlign="center"
        >
          Mis Certificaciones
        </Typography>
      </ThemeProvider>
      {dataTitles.map((title) => {
        return (
          <Box key={title.id}>
            <Typography
              variant="h2"
              color="gray"
              fontSize="50px"
              sx={{ mt: "5rem" }}
            >
              <hr />
            </Typography>
            <Box
              id={title.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardArticle dataTitles={title} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
