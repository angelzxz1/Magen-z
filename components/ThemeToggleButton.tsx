import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineWbSunny as SunIcon } from "react-icons/md";
import { BsMoonStarsFill as MoonIcon } from "react-icons/bs";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "teal")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            borderRadius="full"
            zIndex={10}
        />
    );
};

export default ThemeToggleButton;
