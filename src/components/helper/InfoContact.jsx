import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const InfoContact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "400px",
        Height: "400px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: {
            xs: "100%",
            sm: "100%",
            md: "75%",
            lg: "300px",
            xl: "400px",
          },
        }}
      >
        <CardContent>
          <Typography>Direccion: finochieto 574</Typography>
          <Typography>Numero de telefono: 14221689</Typography>
          <Typography>Email: alan@gmail.com</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InfoContact;
