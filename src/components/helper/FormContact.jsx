import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const FormContac = () => {
  //-------------------------------send mail from contact//
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jrqzr9",
        "template_ds8a8jc",
        form.current,
        "g8s23DkCf267gl_5D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //----------------------------------end-------------------------------
  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          sm: "90%",
          md: "75%",
          lg: "800px",
          xl: "800px",
        },
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          boxShadow: " 0 0 2px 6px",
          color: "black",
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography textAlign={"center"} variant="h3">
            Contacto
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <InputLabel htmlFor="component-helper">Nombre</InputLabel>
            <TextField
              fullWidth
              name="user_name"
              type="text"
              required
            ></TextField>
            <InputLabel htmlFor="component-helper">Email</InputLabel>
            <TextField
              fullWidth
              type="text"
              name="email_name"
              variant="outlined"
              required
            ></TextField>
            <InputLabel htmlFor="component-helper">Mensaje</InputLabel>
            <textarea style={{width:"100%",height:"150px"}} name="message"></textarea>
            {/* <TextField
              fullWidth
             
              type="text"
              name="message"
              variant="outlined"
            ></TextField> */}
            <Button
              type="submit"
              value="send"
              color="primary"
              sx={{ marginTop: "1rem", width: "100%" }}
              variant="contained"
            >
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FormContac;
 
