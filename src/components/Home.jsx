import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Articles from "./Articles";
import Contac from "./Contac";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "80px",
  "@media (max-width:600px)": {
    fontSize: "50px",
  },
  "@media (min-width:600px)": {
    fontSize: "60px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "80px",
  },
};

const Home = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            marginTop: "10rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              fontFamily="Roboto"
              fontSize="40px"
              variant="h1"
              color="black"
              textAlign="center"
            >
              Mantenimiento Residencial
            </Typography>
          </ThemeProvider>
          <Typography
            sx={{ p: "10px" }}
            fontFamily="fantasy"
            fontSize="25px"
            variant="h2"
            color="black"
            textAlign="center"
          >
            PLOMERÌA - ALBAÑILERÌA - ELECTRICIDAD - PINTURA - IMPERMEABILIZACIÒN
            -<br />
            AZULEJOS - PISOS - REMODELACIONES Y LIMPIEZA DE TANQUES
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              mt: "20px",
            }}
          >
            <a target="_blank" style={{ textDecoration: "none" }} href="https://wa.me/1155296365">
              <Button sx={{ gap: 0.3 }} color="secondary" variant="contained">
                <WhatsAppIcon /> WhatsApp
              </Button>
            </a>
            <a style={{ textDecoration: "none" }} href="#Contacto">
              <Button sx={{ gap: 0.3 }} color="primary" variant="contained">
                <EmailIcon /> Email
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
      <Articles/>
      <Contac/>
    </div>
  );
};

export default Home;
