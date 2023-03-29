import { Helmet } from "react-helmet-async";
import {
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import Slider from "react-slick";
import { userComments } from "../constants/details";
const Comments = ({ helmetTitle }) => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <Card
      sx={{
        overflowY: "auto",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Divider
          textAlign="center"
          sx={{
            "&::before, &::after": {
              borderColor: "primary.main",
            },
            mb: 3,
            mt: 2,
          }}
        >
          <Chip
            icon={<ForumRounded />}
            color="primary"
            label={
              <Typography
                variant="body1"
                color="whitesmoke"
                sx={{
                  textAlign: "center",
                  color: "whitesmoke",
                  fontSize: "1.8rem",
                }}
              >
                نظرات کارفرما
              </Typography>
            }
            sx={{ p: 3 }}
          />
          P
        </Divider>

        <Box
          component="div"
          sx={{ mt: 10, justifyContent: "center", alignItems: "center" }}
        >
          <Slider {...options}>
            {userComments.map((user, index) => (
              <Box
                key={index}
                component="div"
                sx={{ justifyContent: "center" }}
              >
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 100,
                    width: 100,
                    margin: "0 auto",
                  }}
                />
                <Typography
                  variant="body1"
                  textAlign="center"
                  color="#2D3032"
                  sx={{ fontSize: "1.6rem", mt: 1 }}
                >
                  {user.fullname}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  color="#2D3032"
                  sx={{ mb: 2, fontSize: "1.2rem" }}
                >
                  {user.jobTitle}
                </Typography>
                <Card
                  sx={{
                    backgroundColor: "#D2D3D3",
                    width: 1 / 2,
                    m: "0 auto",
                    borderRadius: 5,
                    mt: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      varian="body2"
                      textAlign="center"
                      color="#2D3032"
                      sx={{
                        fontSize: "1.8rem",
                        letterSpacing: "-0.5px",
                        lineHeight: "3rem",
                      }}
                    >
                      {user.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Comments;
