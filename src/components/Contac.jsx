import { Box } from "@mui/material";
import FormContac from "./helper/FormContact";

const Contac = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: "8rem",
        gap: "200px",
        justifyContent: "center",
      }}
    >
      <FormContac />
    </Box>
  );
};

export default Contac;
