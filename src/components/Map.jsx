import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import map from "./helper/img/map.png";
import casa from "./helper/img/casa.png";

const Map = () => {
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
          height: 400,
          mt: "5rem",
          mb: "5rem",
          backgroundColor: "#0f203b",
          boxShadow: " 0 0 2px 6px",
          color: "#BDD8CC",
        }}
      >
        <CardMedia
          className="imgProject"
          component="img"
          height="100%"
          image={map}
          alt="project"
        />
      </Card>
    </Box>
  );
};

export default Map;
