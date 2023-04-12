import React from "react";
import { CardArticle } from "./helper/CardArticle";
import { Box, Typography } from "@mui/material";
import paint from "./helper/img/paint.jpg"
import albanil from "./helper/img/albanil.jpeg"
import plomeria from "./helper/img/plomeria.jpg"
import electricidad from "./helper/img/electricidad.jpg"




const Articles = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "10rem",
        pt: "5rem",
      }}
    >
      <Typography variant="h2" color="gray" fontSize="50px" sx={{ mt: "5rem" }}>
        Pintura
        <hr />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardArticle img={paint} />
      </Box>
      <Typography variant="h2" color="gray" fontSize="50px" sx={{ mt: "5rem" }}>
        Alblañilería
        <hr />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardArticle img={albanil} />
      </Box>
      <Typography variant="h2" color="gray" fontSize="50px" sx={{ mt: "5rem" }}>
        Plomería
        <hr />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardArticle img={plomeria} />
      </Box>
      <Typography variant="h2" color="gray" fontSize="50px" sx={{ mt: "5rem" }}>
        Electricidad
        <hr />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardArticle img={electricidad} />
      </Box>
    </Box>
  );
};

export default Articles;
