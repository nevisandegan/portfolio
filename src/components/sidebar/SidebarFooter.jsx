import { Box, Typography } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";
const SidebarFooter = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          my:2,
          gap: "1px",
          alignItems: "center",
          
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke" fontSize={"1.2rem"}>
          طراحی شده توسط <span style={{color:"#9615DB"}}>نویسندگان</span>
        </Typography>
        <Typography variant="caption" color="whitesmoke" fontSize={"1.2rem"}>
          کپی رایت
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
