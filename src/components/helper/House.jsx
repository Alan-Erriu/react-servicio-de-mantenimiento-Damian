import React from "react";
import house from "./img/casas.jpeg";
import { Card, CardMedia,Box } from "@mui/material";

const House = () => {
  return (
    <Box
    id="mapa"
    sx={{
      display: "flex",
      gap: "200px",
      justifyContent: "center",
    }}
  >
    <Card
      sx={{
        width: { xs: "90%", sm: "90%", md: "400px" },
        height: 300,
        mt: "5rem",
        mb: "5rem",
        backgroundColor: "#0f203b",
        boxShadow: " 0 0 2px 6px",
        color: "#BDD8CC",
      }}
    >
      <CardMedia
        sx={{ objectFit: "cover" }}
        className="imgProject"
        component="img"
        height="100%"
        image={house}
        alt="project"
      />
    </Card>
    </Box>
  );
};

export default House;
