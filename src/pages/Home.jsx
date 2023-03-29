import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import bg101 from "../assets/bg101.jpg";
import { Helmet } from "react-helmet-async";
//css
import "./css/style.css";

const Home = ({helmetTitle}) => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  const strings = [
    "مهندس کامپیوتر ",
    "متخصص جاوا اسکریپت",
    "متخصص ری اکت",
    "متخصص نود جی اس",
    "برنامه نویس فول استک ",
    "فریلنسر ",
  ];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["نویسندگان هستم"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });
    const typedInfo = new Typed(infoEl.current, {
      strings,
      startDelay: 2500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg101})`,
        backgroundPosition: "left",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        overflow:"auto",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
    <Helmet>
      <title>
       {helmetTitle}
      </title>
    </Helmet>
      <div className="div-home">
        <Typography
          ref={nameEl}
          sx={{
           
            textAlign: "center",
            color: "#9615DB",
            fontSize: "3rem",
            position: "absolute",
            top: "4rem",
            left: "13rem",
          }}
        ></Typography>
        <Typography
          ref={infoEl}
          sx={{
            my: 7,
           
            textAlign: "center",
            color: "#9615DB",
            fontSize: "2rem",
          }}
        ></Typography>
      </div>
    </Box>
  );
};

export default Home;
