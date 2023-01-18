import { Box, useColorModeValue } from "@chakra-ui/react";

interface SectionProps {
    odd?: boolean;
    children?: JSX.Element | JSX.Element[] | string | number | undefined;
    justify?: string;
}

const Section = ({
    odd = false,
    children,
    justify = "center",
}: SectionProps) => {
    return (
        <Box
            as="section"
            h="100vh"
            w="100%"
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent={justify}
            alignItems="center"
            overflow="hidden"
            bg={useColorModeValue(
                odd
                    ? "linear-gradient(to bottom right, #fff, 60%, #0bb87f)"
                    : "linear-gradient(to top right, #fff, 60%, #0bb87f)",
                odd
                    ? "linear-gradient(to bottom right, rgb(12, 12, 12), 75%, #473361)"
                    : "linear-gradient(to top right, rgb(12, 12, 12), 75%, #473361)"
            )}
        >
            {children}
        </Box>
    );
};

export default Section;
