import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

import colors from "../constants/colors";

const HomeTabIcon = ({ color, opacityVal }) => {

    return (
        <Svg
            width={36}
            height={29}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
        >
            <G opacity={ opacityVal } fill={ color }>
            <Path d="M18.573 3.338a.386.386 0 0 0-.533 0l-8.869 8.473a.387.387 0 0 0-.119.279v7.952a1.542 1.542 0 0 0 1.542 1.542h4.63a.77.77 0 0 0 .771-.771v-6.547a.386.386 0 0 1 .386-.386h3.854a.386.386 0 0 1 .386.386v6.552a.771.771 0 0 0 .771.771h4.625a1.54 1.54 0 0 0 1.54-1.546V12.09a.388.388 0 0 0-.119-.279l-8.865-8.473Z" />
            <Path d="m29.618 10.221-3.6-3.448V1.542a.771.771 0 0 0-.771-.771h-2.311a.771.771 0 0 0-.771.771v1.541L19.375.415a1.581 1.581 0 0 0-2.136 0L6.992 10.22a.786.786 0 0 0-.064 1.078.77.77 0 0 0 1.116.051l10-9.553a.386.386 0 0 1 .533 0l10 9.553a.77.77 0 0 0 1.088-.021.79.79 0 0 0-.047-1.107Z" />
            </G>
        </Svg>
    );
}

export default HomeTabIcon