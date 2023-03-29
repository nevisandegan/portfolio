import { Fab, Box } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useContext } from "react";
import MainContext from "../../context";
const DraweActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          display: {
            position: "absolute",
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }, 
        }}
      >
        <Fab
          aria-label="Sidebar"
          size="small"
          sx={{ m: 1, backgroundColor: "primary.main",color:"whitesmoke" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRoundedIcon />
        </Fab>
      </Box>
    </>
  );
};

export default DraweActionButton;
