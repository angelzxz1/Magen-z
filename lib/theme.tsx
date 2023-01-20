import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
};
const colors = {
    purpleTransparent: {
        50: "#dccfed28",
        100: "#c0a5e428",
        200: "#a47bda28",
        300: "#8851d128",
        400: "#6c26c728",
        500: "#541d9c28",
        600: "#42167b28",
        700: "#300f5a28",
        800: "#1e083928",
        900: "#0b011828",
    },

    purple: {
        50: "#dccfed",
        100: "#c0a5e4",
        200: "#a47bda",
        300: "#8851d1",
        400: "#6c26c7",
        500: "#541d9c",
        600: "#42167b",
        700: "#300f5a",
        800: "#1e0839",
        900: "#0b0118",
    },
    tealTransparent: {
        50: "#edfcf728",
        100: "#bcefde28",
        200: "#8ae2c528",
        300: "#58d5ac28",
        400: "#26c79228",
        500: "#1d9c7228",
        600: "#167c5a28",
        700: "#0f5b4228",
        800: "#083b2a28",
        900: "#011a1128",
    },
    teal: {
        50: "#edfcf7",
        100: "#bcefde",
        200: "#8ae2c5",
        300: "#58d5ac",
        400: "#26c792",
        500: "#1d9c72",
        600: "#167c5a",
        700: "#0f5b42",
        800: "#083b2a",
        900: "#011a11",
    },
};

const styles = {
    global: {
        body: {
            overflow: "overlay",
            bg: "purple.900",
        },
    },
};

export default extendTheme({
    config,
    colors,
    styles,
});
