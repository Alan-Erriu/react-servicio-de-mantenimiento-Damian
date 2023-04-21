import { Box } from "@mui/material";
import FormContac from "./helper/FormContact";

const Contac = () => {
  return (
    <Box id ="Contacto"
      sx={{
        display: "flex",
        mt: "8rem",
        gap: "200px",
        justifyContent: "center",
        pt:"5rem"
      }}
    >
      <FormContac />
    </Box>
  );
};

export default Contac;
