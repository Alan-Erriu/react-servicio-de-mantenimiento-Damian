import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Map from "./helper/Map";


export default function Footer() {
  return (
    <Paper
      sx={{ marginTop: "280px", background: "#060B09" }}
      component="footer"
      variant="outlined"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { md: 10 },
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            my: 1,
            flexDirection: "column",
            mt: { md: "8rem" },
          }}
        >
          <Typography
            variant="caption"
            color="white"
            textAlign={{ xs: "center", md: "start" }}
          >
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://goo.gl/maps/khUaHwjj6wA8XRGH8"
            >
              <IconButton sx={{ color: "white",textAlign:"start" }}>
                La Martine 1182 <br />
                San Antonio De Padua
              </IconButton>
            </a>
          </Typography>
          <Typography
            variant="caption"
            color="white"
            textAlign={{ xs: "center", md: "start" }}
          >
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="https://wa.me/1155296365"
            >
              <IconButton sx={{ color: "white" }}>
                <WhatsAppIcon />
                11-5529-6365
              </IconButton>
            </a>
          </Typography>
          <Typography
            variant="caption"
            color="white"
            textAlign={{ xs: "center", md: "start" }}
          >
            <a style={{ textDecoration: "none" }} href="#Contacto">
              <IconButton sx={{ color: "white" }}>
                <EmailIcon />
                erria@hotmail.com
              </IconButton>
            </a>
          </Typography>
        </Box>
        <Map />
        {/* <House/> */}
      </Container>
    </Paper>
  );
}
