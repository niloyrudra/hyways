import * as React from "react"
import Svg, { Path } from "react-native-svg"

const QRCodeIcon = (props) => (
  <Svg
    width={174}
    height={175}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M58 .644H0v58h19.333V19.977H58V.644Zm-58 174v-58h19.333v38.667H58v19.333H0Zm116-174v19.333h38.667v38.667H174v-58h-58Zm38.667 116H174v58h-58v-19.333h38.667v-38.667Zm-116-77.333h38.666v38.666H38.667V39.311Zm0 58h38.666v38.667H38.667V97.311Zm96.667-58H96.667v38.666h38.667V39.311Zm-38.667 58h38.667v38.667H96.667V97.311Z"
      fill="#00B906"
    />
  </Svg>
)

export default QRCodeIcon