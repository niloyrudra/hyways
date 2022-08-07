import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import colors from "../constants/colors";

const BXBarCodeTabIcon = ({ color, opacityVal }) => {

    return (
        <Svg
            width={29}
            height={30}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // {...props}
        >
            <G opacity={ opacityVal } fill={ color }>
            <Path d="M5.548 5.539h2.365v11.827H5.548V5.539Zm10.644 0h1.183v11.827h-1.183V5.539Zm-4.73 0h3.547v11.827h-3.548V5.539Zm-2.366 0h1.183v11.827H9.096V5.539Zm9.462 0h3.548v11.827h-3.548V5.539Z" />
            <Path d="M4.365 3.173H9.1V.808H4.365A2.367 2.367 0 0 0 2 3.173v4.735h2.365V3.173Zm0 18.923H9.1v-2.365H4.365V15H2v4.731a2.367 2.367 0 0 0 2.365 2.366v-.001ZM23.289.808h-4.731v2.365h4.731v4.735h2.365V3.173A2.367 2.367 0 0 0 23.289.808Zm0 18.923h-4.731v2.365h4.731a2.367 2.367 0 0 0 2.365-2.365V15h-2.365v4.731Z" />
            </G>
        </Svg>
    );
}

export default BXBarCodeTabIcon