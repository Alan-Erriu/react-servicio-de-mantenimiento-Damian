import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

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
          sx={{p:"10px"}}
            fontFamily="fantasy"
            fontSize="25px"
            variant="h2"
            color="black"
            textAlign="center"
          >
            PLOMERÌA - ALBAÑILERÌA - ELECTRICIDAD - PINTURA - IMPERMEABILIZACIÒN
            -<br />
            ALARMAS VECINALES-AZULEJOS - PISOS - REMODELACIONES Y LIMPIEZA DE
            TANQUES
          </Typography>
        <Box sx={{display:"flex", justifyContent:"center",gap:"10px",mt:"20px"}}>
          <Button color="primary" variant="contained">WhatsApp</Button>
          <Button color="primary" variant="contained">Email</Button>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
