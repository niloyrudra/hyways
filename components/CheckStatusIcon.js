import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CheckStatusIcon = ( props ) => {
  return (
    <Svg
        width={12}
        height={11}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.13 1.317a1.052 1.052 0 1 1 1.5 1.475l-5.6 7.006a1.053 1.053 0 0 1-1.516.028L.799 6.11a1.053 1.053 0 1 1 1.489-1.485l2.94 2.938 4.876-6.212a.333.333 0 0 1 .028-.031l-.002-.003Z"
        fill="#00B906"
        />
    </Svg>
  )
}

export default CheckStatusIcon