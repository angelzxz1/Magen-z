import { Box, Flex, keyframes, useColorModeValue } from "@chakra-ui/react";

const barSizes = keyframes`
0% {
        width: 10%;
        height: 10%;
        bottom: -50%;
    }

    100% {
        width: 10%;
        height: 90%;
        bottom: 0%;
    }`;
interface BarProps {
    i: number;
    delay: number;
    bg?: string;
}
const Bar = ({ i, delay, bg }: BarProps) => {
    return (
        <Flex
            position="absolute"
            bottom="-50%"
            right={`calc(20% * ${i} - 5rem)`}
            width="10%"
            height="10%"
            borderRadius="50rem"
            bg={useColorModeValue(
                "linear-gradient(255deg, #3da884,#00000001,#00000001)",
                "linear-gradient(255deg, #6c3ca8,#00000001,#00000001)"
            )}
            transform="rotate(30deg)"
            display="flex"
            justify="center"
            align="center"
            animation={`${barSizes} 1s ease-in-out ${delay}ms forwards`}
        />
    );
};

const Bars = () => {
    return (
        <Box
            align-items="flex-end"
            position="relative"
            width="100%"
            h="100%"
            margin-right="5%"
            min-height="50rem"
        >
            <Bar i={1} delay={0} />
            <Bar i={2} delay={200} />
            <Bar i={3} delay={400} />
        </Box>
    );
};

export default Bars;
