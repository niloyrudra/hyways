import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CheckedIcon = (props) => {
    return (
        <Svg
            width={36}
            height={36}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 18A18 18 0 1 1-.001 18 18 18 0 0 1 36 18Zm-8.933-6.817a1.688 1.688 0 0 0-2.43.049l-7.814 9.956-4.709-4.711a1.688 1.688 0 0 0-2.385 2.385l5.953 5.955a1.687 1.687 0 0 0 2.428-.045l8.982-11.228a1.688 1.688 0 0 0-.022-2.363l-.003.002Z"
            fill="#00B906"
            />
        </Svg>
    );
}

export default CheckedIcon