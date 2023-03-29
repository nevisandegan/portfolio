import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs, SidebarFooter } from ".";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <SidebarHeader />
      <Divider color={grey[800]}  variant="middle" />
      <SidebarTabs />
      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  );
};
export default SidebarContent;
