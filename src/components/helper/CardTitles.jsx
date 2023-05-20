import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

export const CardArticle = ({ dataTitles: { img, title, description } }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        width: { xs: "100%", sm: "100%", md: "90%" },
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "70%", md: "600px" },
          height: 400,
          mt: "5rem",
          backgroundColor: "#0f203b",
          boxShadow: " 0 0 2px 6px",
          color: "black",
        }}
      >
        <CardMedia
          className="imgProject"
          component="img"
          height="100%"
          image={img}
          alt="project"
        />
      </Card>
      <Box
        sx={{
          position: "relative",

          width: { xs: "90%", sm: "70%", md: "400px" },
          mt: "2rem",
          ml: { md: "4rem" },
          justifyContent: "center",

          textAlign: "start",
        }}
      >
        <Typography fontSize={"30px"} variant="h3" color="black">
          {title}
        </Typography>

        <Typography
          sx={{ mt: "1rem" }}
          variant="h4"
          color="black"
          fontSize="20px"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
