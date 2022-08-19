import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackButtonIcon = (props) => (
  <Svg
    width={25}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.5 17 2 9.5 9.5 2M2.882 9.059h20.294"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default BackButtonIcon