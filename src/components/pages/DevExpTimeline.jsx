import { Slide, Typography } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { HomeRepairServiceRounded } from "@mui/icons-material";
import { devE } from "../../constants/details";

const DevExpTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate" sx={{ mt: 5, direction: "ltr" }}>
      {devE.map((item, index) => (
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
                <HomeRepairServiceRounded color="primary" fontSize="large" />
              </TimelineDot>
              {index !== 6 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                color="#2D3032"
                sx={{
                  fontSize: "1.6rem",
                  letterSpacing: "-0.2px",
                }}
              >
                {item}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
