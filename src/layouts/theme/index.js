import { createTheme } from "@mui/material/styles";

// NOTE Create Custom Theme

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary:{
      main:"#9615DB",
      light:"#D2D3D3",
      dark:"#2D3032"
    },
    secondary:{
      main:"#555759"
    }
  },
  typography: {
    fontFamily: "vazir,roboto",
  },
});
