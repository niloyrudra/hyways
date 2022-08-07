import * as React from "react"
import Svg, { Path } from "react-native-svg"

import colors from "../constants/colors";

const QRTabIcon = ({ color, opacityVal }) => {

    return (
        <Svg
            width={64}
            height={29}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
        >
            <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.1 0H21v7.1h2.365V2.365H28.1V0ZM21 21.289v-7.1h2.365v4.731H28.1v2.365l-7.1.004ZM35.192 0v2.365h4.731V7.1h2.365V0h-7.096Zm4.731 14.192h2.365v7.1h-7.1v-2.369h4.731l.004-4.731ZM25.731 4.731h4.731v4.731h-4.731V4.731Zm0 7.1h4.731v4.731h-4.731v-4.731Zm11.827-7.1h-4.731v4.731h4.731V4.731Zm-4.731 7.1h4.731v4.731h-4.731v-4.731Z"
            fill={ color }
            opacity={ opacityVal }
            />
        </Svg>
    );
}

export default QRTabIcon