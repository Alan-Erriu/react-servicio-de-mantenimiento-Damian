import React from "react";
import { CardArticle } from "./helper/CardArticle";
import { Box, Typography } from "@mui/material";
import dataArticles from "./helper/dataArticles";

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
      {dataArticles.map((article) => {
        return (
          <Box  key={article.id}>
            <Typography
              variant="h2"
              color="gray"
              fontSize="50px"
              sx={{ mt: "5rem" }}
            >
              <hr />
            </Typography>
            <Box id={article.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardArticle article={article}  />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Articles;
