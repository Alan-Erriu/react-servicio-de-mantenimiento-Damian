import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
// import img from "../helper/img/paint.jpg";



export const CardArticle = ({article:{img,title,description,}}) => {
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
          width: { xs: "90%", sm: "70%", md: "400px" },
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
        <Typography
          sx={{ mt: "1rem", color: "green" }}
          variant="h4"
          color="black"
          fontSize="20px"
        ></Typography>
        <Typography
          sx={{ mt: "1rem" }}
          variant="h4"
          color="black"
          fontSize="20px"
        >
          Zona Oeste únicamente
        </Typography>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "star",
            gap: "30px",
            mt: "1rem",
          }}
        >
            <Box sx={{ display: "flex", gap: "5px" }}>
          <Button variant="contained" color="secondary">
              <Typography
                sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                fontSize={{ xs: "12px", sm: "14px", md: "16px" }}
                color={"white"}
              >
                Consultar
              </Typography>
          </Button>
            </Box>
        </CardActions>
      </Box>
    </Box>
  );
};
