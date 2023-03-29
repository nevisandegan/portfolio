import { ThemeProvider } from "@mui/material/styles";
import "../App.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { HelmetProvider } from "react-helmet-async";
import { theme } from "./theme";
//dependency for rtl
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
//Gird
import Grid from "@mui/material/Unstable_Grid2";
//NOTE create RTL cache !RTL
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          {/*Grid System*/}
          <Grid container sx={{ height: "100vh"}}  >
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
