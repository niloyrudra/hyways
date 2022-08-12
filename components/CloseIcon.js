import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CloseIcon = (props) => (
  <Svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.328.174a.594.594 0 0 1 0 .841L1.015 9.328a.595.595 0 0 1-.841-.841L8.487.174a.594.594 0 0 1 .84 0Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.175.174a.594.594 0 0 0 0 .841l8.313 8.313a.595.595 0 0 0 .841-.841L1.016.174a.594.594 0 0 0-.841 0Z"
      fill="#fff"
    />
  </Svg>
)

export default CloseIcon