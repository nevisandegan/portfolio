import { IconButton,Box} from "@mui/material"
import { GitHub, Telegram, Instagram } from "@mui/icons-material";

const SocialMedia=()=>
{
return(
    <>
          <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
        <IconButton aria-label="Github">
          <a
            href="https://github.com/nevisandegan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={{ color: "gray" }} fontSize="large" />
          </a>
        </IconButton>
        <IconButton aria-label="Instagram">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: "gray" }} fontSize="large" />
          </a>
        </IconButton>
        <IconButton aria-label="Telegram">
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram sx={{ color: "gray" }} fontSize="large" />
          </a>
        </IconButton>
      </Box>
    </>
)
}


export default SocialMedia;