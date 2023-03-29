import { Chip, Box, Typography, LinearProgress} from "@mui/material";
//css
import "../../pages/css/style.css";
const Skill = ({ name, value, icon,clr }) => {
  return (
    <>
     <div className="grid">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ minWidth: 35, mt: 2.4 }}>
            <Typography sx={{ fontSize: "1.4rem" }} color={clr}>
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              className="linear"
              sx={{ height: 10, borderRadius: 2,mt:2 ,backgroundColor:"#78797840",
              '& .MuiLinearProgress-bar1Determinate': {
                        backgroundColor: clr
                    }
              }}
              variant="determinate"
              value={value}
            />
          </Box>
        </Box>
          <Chip
            icon={<Box component="img" src={icon} sx={{ height: 30}} />}
            label={name}
            sx={{ color: "#14213D", p: 3, fontSize: "1.4rem",mt:1 }}
          />
        </div>
    </>
  );
};

export default Skill;
