import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const DefaultUserAvatar = (props) => {
    return (
        <Svg
            width={110}
            height={110}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G opacity={0.15} fill="#000">
            <Path d="M55 .082a54.918 54.918 0 1 0 0 109.836A54.918 54.918 0 0 0 55 .082Zm31.382 89.906v-2.386a20.433 20.433 0 0 0-19.614-20.834H43.232a20.4 20.4 0 0 0-19.575 20.831c0 .042-.038.087-.038.129v2.294a47.094 47.094 0 1 1 62.764-.038v.004Z" />
            <Path d="M55.001 19.696a19.613 19.613 0 1 0-.006 39.227A19.613 19.613 0 0 0 55 19.696Z" />
            </G>
        </Svg>
    );
}
export default DefaultUserAvatar
