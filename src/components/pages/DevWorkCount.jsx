import CountUp from "react-countup";
import {
  Typography,
  Chip,
  Box,
  Tooltip,
} from "@mui/material";
import {devWorkInfo} from "../../constants/details"


const DevWorkCount = () => {
  return (
    <>
      {devWorkInfo.map((item, index) => (
        <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>
          <Tooltip 
            title={<Typography fontSize={10}>{item.tooltipTitle}</Typography>}
            placement="right"
            arrow
            sx={{ fontSize: "1.2rem" }}
          >
            <Chip
              icon={item.icon}
              label={
                <Typography color="whitesmoke">
                  <CountUp start={0} end={item.total} duration={2} />
                </Typography>
              }
              sx={{ p: 2, backgroundColor: item.color }}
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
};

export default DevWorkCount;
