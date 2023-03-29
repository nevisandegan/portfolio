import { Avatar, Typography, Box } from "@mui/material";
import img1 from "../../assets/img1.jpg";
import SocialMedia from "../SocialMedia";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        alt="my pic"
        variant="rounded"
        src={img1}
        sx={{
          width: 200,
          height: 200,
          margin: "0 auto",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
          border: "0.1px solid whitesmoke",
        }}
      >
        H
      </Avatar>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <img alt="sss" width={100} src={img1} style={{ borderRadius: 5 }} />
      </Box>
      <Typography
        sx={{ color: "whitesmoke", fontSize: "1.8rem" }}
        style={{ marginTop: 16 }}
      >
        محمد حسین نویسندگان
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: "whitesmoke",
          fontSize: "1.2rem",
          letterSpacing: "-0.2px",
        }}
      >
        مهندس کامپیوتر و برنامه نویس
      </Typography>
      {/*Social Medai*/}
      <SocialMedia />
    </>
  );
};

export default SidebarHeader;
