import React from "react";

import { Card, CardMedia, Box } from "@mui/material";

const House = ({ img }) => {
  return (
    <Box
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
          component="img"
          height="100%"
          image={img}
          alt="titulo"
        />
      </Card>
    </Box>
  );
};

export default House;
