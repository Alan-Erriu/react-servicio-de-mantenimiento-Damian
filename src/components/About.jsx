import House from "./helper/House";
import { Box, Button } from "@mui/material";

export const About = () => {
  return (
    <Box
      sx={{
        marginTop: "10rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <House />
    </Box>
  );
};
