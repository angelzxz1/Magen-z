import { Box } from "@chakra-ui/react";

const Bar = () => {
    return <Box>bar</Box>;
};

const Bars = () => {
    return (
        <Box>
            <Bar />
            <Bar />
            <Bar />
        </Box>
    );
};

export default Bars;
