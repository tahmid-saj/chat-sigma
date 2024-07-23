import "./sigma-message.styles"
import { SigmaMessageContainer } from "./sigma-message.styles"
import { Fragment } from "react"
import SimplePaper from "../../../shared/mui/paper/paper.component"
import { Typography } from "@mui/material"
import FunctionsIcon from '@mui/icons-material/Functions';
import { COLOR_CODES } from "../../../../utils/constants/shared.constants"

const paperStyles = {
  backgroundColor: "#333333",
  margin: "0.75% 10% 0.75% 2%",
  position: "relative"
}

const SigmaMessage = ({ sigmaMessage }) => {
  return (
    <SigmaMessageContainer>
      <SimplePaper styles={ paperStyles }>
        <FunctionsIcon sx={{ backgroundColor: COLOR_CODES.general["6"], borderRadius: "2rem",
          margin: "0.25% 1% 15px 0%" }}/>
        <Typography sx={{ color: COLOR_CODES.general["4"] }}>{ sigmaMessage }</Typography>
      </SimplePaper>
    </SigmaMessageContainer>
  )
}

export default SigmaMessage