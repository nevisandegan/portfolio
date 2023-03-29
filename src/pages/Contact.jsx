import { useState, useEffect } from "react";
import { Typography, Card, CardContent, Divider, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import worldMap from "../assets/map.svg";

import {ContactForm} from "../components/pages"

const Contact = ({ helmetTitle }) => {
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
        height: "100vh",
        backgroundColor: "#fff",
        overflow: "scroll",
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
            mt: 2,
            "&::before, &::after": {
              borderColor: "primary.main",
            },
          }}
        >
          <Chip
            color="primary"
            icon={<AccountCircle />}
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
                ارتباط با من
              </Typography>
            }
            sx={{ p: 3 }}
          />
        </Divider>
        <Grid container sx={{ mt: 8 }}>
          <Grid xs={12} sx={12} md={8}>
            <Card
              sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D2D3D3",
              }}
            >
              {/* form */}
              <ContactForm />
            </Card>
          </Grid>
          <Grid
            xs={0}
            sm={0}
            md={4}
            sx={{
              textAlign: "center",
              backgroundImage: `url(${worldMap})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h4"
              color="#2D3032"
              sx={{
                mt: 4,
                display: {
                  sm: "none",
                  xs: "none",
                  md: "block",
                },
              }}
            >
              راجب چی حرف بزنیم ؟
            </Typography>
            <Typography
              variant="body1"
              color="black"
              sx={{
                mt: 2,
                fontSize: "1.4rem",
                display: {
                  sm: "none",
                  xs: "none",
                  md: "block",
                },
              }}
            >
              👋{" "}
              <a
                href="mailto:test@gmail.com"
                alt="email"
                style={{
                  color: "#9615DB",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                ایمیل
              </a>{" "}
              بزن به من
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
