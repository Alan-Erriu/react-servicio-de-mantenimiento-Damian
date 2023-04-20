import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";

const FormContac = () => {
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
          <InputLabel htmlFor="component-helper">Nombre</InputLabel>
          <TextField fullWidth type="text" required></TextField>
          <InputLabel htmlFor="component-helper">Número</InputLabel>
          <TextField type="text" required></TextField>
          <InputLabel htmlFor="component-helper">Email</InputLabel>
          <TextField type="text" variant="outlined" required></TextField>
          <InputLabel htmlFor="component-helper">Asunto</InputLabel>
          <TextField rows={4} type="text" variant="outlined"></TextField>
          <Button
            color="primary"
            sx={{ marginTop: "1rem" }}
            variant="contained"
          >
            Enviar
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FormContac;
