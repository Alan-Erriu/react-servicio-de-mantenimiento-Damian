import { Box } from "@mui/material";
import FormContac from "./helper/FormContact";
import InfoContact from "./helper/InfoContact";

const Contac = () => {
  return (
    <Box sx={{ display: "flex", mt: "8rem", gap:"200px", justifyContent:"center" }}>
      {/* <InfoContact /> */}
      <FormContac />
    </Box>
  );
};

export default Contac;
