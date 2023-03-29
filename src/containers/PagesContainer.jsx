import Grid from "@mui/material/Unstable_Grid2";

const PagesContainer = ({ children }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={9}
      sx={{
        backgroundColor: "#fff",
      }}
    >
      {children}
    </Grid>
  );
};

export default PagesContainer;
