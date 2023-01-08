import { Box, Flex } from "@chakra-ui/react";
interface BarProps {
    i: number;
}
const Bar = ({ i }: BarProps) => {
    return (
        <Flex
            position="absolute"
            bottom={`${-50}%`}
            right={`calc(20% * ${i} - 5rem)`}
            width="10%"
            height="10%"
            borderRadius="50rem"
            bg="linear-gradient(255deg, #6c3ca8,#00000001,#00000001)"
            transform="rotate(30deg)"
            display="flex"
            justify="center"
            align="center"
        >
            bar
        </Flex>
    );
};

const Bars = () => {
    return (
        <Box
            align-items="flex-end"
            position="relative"
            width="75%"
            margin-right="5%"
            min-height="50rem"
        >
            <Bar i={1} />
            <Bar i={2} />
            <Bar i={3} />
        </Box>
    );
};

export default Bars;
