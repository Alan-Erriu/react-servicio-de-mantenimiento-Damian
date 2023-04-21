import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import map from "./img/map.png";
// // import casa from "./img/casa";

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
          height: 300,
          mt: "5rem",
          mb: "5rem",
          backgroundColor: "#0f203b",
          boxShadow: " 0 0 2px 6px",
          color: "#BDD8CC",
        }}
      >
        <CardActionArea sx={{ width: "100%", height: "100%", }} target="_blank" href="https://goo.gl/maps/khUaHwjj6wA8XRGH8">
          <CardMedia
          sx={{objectFit:"cover"}}
            className="imgProject"
            component="img"
            height="100%"
            image={map}
            
            alt="project"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Map;
