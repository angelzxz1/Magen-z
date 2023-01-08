import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    disableTransitionOnChange: false,
};
const colors = {
    purple: {
        50: "#dccfed",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "#0b0118",
    },
    teal: {
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
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
