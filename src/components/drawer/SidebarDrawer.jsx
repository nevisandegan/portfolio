import { useContext } from "react";
import MainContext from "../../context";
import { Drawer } from "@mui/material";
import { SidebarContent } from "../sidebar";
const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%",
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          },
        }}
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
      >
        <SidebarContent />
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
