import { Helmet } from "react-helmet-async";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import info from "../assets/info.jpg";
import { CodeRounded } from "@mui/icons-material";
import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = ({ helmetTitle }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      sx={{
        overflowY: "auto",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <CardContent>
        <Grid container sx={{ mx: 3, mt: 2 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <Divider
              textAlign="right"
              sx={{
                "&::before, &::after": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Chip
                color="primary"
                icon={<CodeRounded />}
                label={
                  <Typography
                    variant="body1"
                    sx={
                      matches
                        ? {
                            textAlign: "center",
                            color: "whitesmoke",
                            fontSize: "1.8rem",
                          }
                        : {
                            textAlign: "center",
                            color: "whitesmoke",
                            fontSize: "1.8rem",
                            letterSpacing:"-1.2px"
                          }
                    }
                  >
                    توسعه دهنده فول استک و مهندس کامپیوتر
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>

            <Grid container>
              <Grid
                xs={0}
                sm={2}
                md={2}
                lg={2}
                sx={{
                  mt: 8,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                <DevWorkCount />
              </Grid>

              <Grid xs={12} sm={10} md={10} lg={10}>
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <Avatar
              src={info}
              className="avtr"
              sx={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                margin: "0 auto",
                height: 230,
                width: 250,
                display: {
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              H
            </Avatar>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 6 }}>
            <Divider
              textAlign="center"
              sx={{
                "&::before, &::after": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Chip
                color="primary"
                icon={<CodeRounded />}
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{
                      textAlign: "center",
                      color: "whitesmoke",
                      fontSize: "1.8rem",
                    }}
                  >
                    مهارت ها
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
