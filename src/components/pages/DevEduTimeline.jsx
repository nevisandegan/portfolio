import { Slide, Typography } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { devEdu } from "../../constants/details";

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
        key={index}
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 1}99ms` : "0ms",
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <SchoolRounded color="primary" fontSize="large" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="caption"
                color="#D2D3D3"
                fontSize="small"
                mt={1}
              >
                {item.year}
              </Typography>
              <Typography
                color="#2D3032"
                sx={{ fontSize: "1.6rem", letterSpacing: "-0.2px" }}
              >
                {item.cert}
              </Typography>
              <Typography
                color="#2D3032"
                sx={{ fontSize: "1.6rem", letterSpacing: "-0.2px" }}
                mt={1}
              >
                {item.major}
              </Typography>
              <Typography
                color="#2D3032"
                sx={{ fontSize: "1.6rem", letterSpacing: "-0.2px" }}
                mt={1}
              >
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevEduTimeline;
