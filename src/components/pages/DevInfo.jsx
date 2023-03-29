import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      className="introduce"
      textAlign="left"
      sx={{ mt: 2, color: "#2D3032" }}
    >
      {children}
      <KeyboardArrowLeftRounded vari className="icon-in" />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام نام خانوادگی : محمد حسین نویسندگان</Info>
      <Info>سن : ۲۵</Info>
      <Info>شهر : تهران</Info>
      <Info>nevisa****@gmail.com : ادرس ایمیل</Info>
      <Info>*******:شماره موبایل</Info>
    </>
  );
};

export default DevInfo;
