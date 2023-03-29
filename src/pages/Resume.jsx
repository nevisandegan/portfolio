import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Typography, Card, CardContent, Divider, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SourceIcon from "@mui/icons-material/Source";
import { HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
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
        <Divider
          textAlign="center"
          sx={{
            mt: 2,
            "&::before, &::after": {
              borderColor: "primary.main",
            },
          }}
        >
          <Chip
            color="primary"
            icon={<SourceIcon />}
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
                رزومه من
              </Typography>
            }
            sx={{ p: 3 }}
          />
        </Divider>

        <Grid container sx={{ mt: 4 }}>
          <Grid xs={7}>
            <Divider
              textAlign="center"
              sx={{
                "&::before,&::after": {},
              }}
            >
              <Chip
                icon={<HomeRepairServiceRounded />}
                color="primary"
                label={
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{
                      textAlign: "center",
                      color: "whitesmoke",
                      fontSize: "1.4rem",
                    }}
                  >
                    پروژه ها
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>

            <DevExpTimeline loading={loading}/>
          </Grid>
          <Grid xs={5}>
            <Divider
              textAlign="center"
              sx={{
                "&::before,&::after": {},
              }}
            >
              <Chip
                icon={<SchoolRounded />}
                color="primary"
                label={
                  <Typography
                    variant="body1"
                    color="black"
                    sx={{
                      textAlign: "center",
                      color: "whitesmoke",
                      fontSize: "1.4rem",
                    }}
                  >
                    تحصیلات
                  </Typography>
                }
                sx={{ p: 3 }}
              />
            </Divider>

            <DevEduTimeline loading={loading}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
