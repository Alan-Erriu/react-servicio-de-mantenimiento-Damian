import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Paper
      sx={{ marginTop: "280px", background: "#060B09" }}
      component="footer"
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Typography variant="caption" color="white" textAlign="center">
            <IconButton sx={{ color: "white" }}>
              <WhatsAppIcon />1123679535
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <EmailIcon />erria@hotmail.com
            </IconButton>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="caption" color="white" textAlign="center">
            La Martine 1182/ San Antonio De Padua
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
