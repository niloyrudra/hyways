import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StatusTabIcon = ({ color, opacityVal }) => {

    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.908 21.805A9.71 9.71 0 1 0 11.9 2.387a9.71 9.71 0 0 0 .008 19.418Zm0 1.387a11.1 11.1 0 1 0 0-22.201 11.1 11.1 0 0 0 0 22.201Z"
                fill={ color }
                opacity={ opacityVal }
            />
            <Path
                d="m13.198 10.138-3.176.4-.113.527.624.115c.407.1.488.244.4.65L9.91 16.64c-.269 1.244.145 1.83 1.121 1.83a2.873 2.873 0 0 0 2.032-.829l.122-.577c-.27.218-.605.338-.952.341-.382 0-.52-.268-.422-.739l1.387-6.528ZM13.291 7.242a1.387 1.387 0 1 1-2.774 0 1.387 1.387 0 0 1 2.774 0Z"
                fill={ color }
                opacity={ opacityVal }
            />
        </Svg>
    );
}

export default StatusTabIcon