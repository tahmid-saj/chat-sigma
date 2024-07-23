import { Fragment } from "react"
import "./user-message.styles"
import SimplePaper from "../../../shared/mui/paper/paper.component"
import { Typography } from "@mui/material"
import { COLOR_CODES } from "../../../../utils/constants/shared.constants"

const paperStyles = {
  backgroundColor: "#333333",
  margin: "0.75% 2% 0.75% 23%"
}

const UserMessage = () => {
  return (
    <Fragment>
      <SimplePaper styles={ paperStyles }>
        <Typography sx={{ color: COLOR_CODES.general["0"] }}>User message</Typography>
      </SimplePaper>
    </Fragment>
  )
}

export default UserMessage