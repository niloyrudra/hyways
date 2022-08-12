import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CircleAround = (props) => (
  <Svg
    width={134}
    height={134}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M67 134c37.003 0 67-29.997 67-67S104.003 0 67 0 0 29.997 0 67s29.997 67 67 67Z"
      fill="#fff"
    />
    <Path
      d="M67 132.5c36.175 0 65.5-29.325 65.5-65.5S103.175 1.5 67 1.5 1.5 30.825 1.5 67s29.325 65.5 65.5 65.5Z"
      stroke="#00B906"
      strokeWidth={3}
    />
  </Svg>
)

export default CircleAround