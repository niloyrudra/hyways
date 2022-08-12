import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RefreshIcon = (props) => (
  <Svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.376 1.051a.227.227 0 0 0-.359-.183l-.892.639-.07.051a5.3 5.3 0 1 0 .665 6.726.266.266 0 0 0-.071-.368L8.32 6.993a.285.285 0 0 0-.394.077 3.149 3.149 0 1 1-.669-4.226l-.15.108-.892.639a.227.227 0 0 0 .06.4l3.817 1.3a.226.226 0 0 0 .3-.215l-.014-4.025h-.002Z"
      fill="#fff"
    />
  </Svg>
)

export default RefreshIcon