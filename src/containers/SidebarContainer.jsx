import Grid from "@mui/material/Unstable_Grid2";

const SidebarCaontaienr = ({ children }) => {
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={3}
      xl={3}
      sx={{

        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundColor: "#2D3032"
      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarCaontaienr;
