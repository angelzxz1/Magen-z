import { Box } from "@chakra-ui/react";
import Bars from "../components/Home/Bars";

const Home = () => {
    return (
        <Box
            as="main"
            color="aliceblue"
            display="flex"
            justify-content="right"
            position="relative"
            flexDirection="column"
        >
            <Box
                as="section"
                h="100vh"
                w="100%"
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="left"
                alignItems="center"
                overflow="hidden"
                background="linear-gradient(to bottom right, rgb(12, 12, 12), 75%, #473361)"
            >
                <Bars />
            </Box>
            <Box as="section" h="100vh">
                <Box as="h1">Hello World</Box>
            </Box>
        </Box>
    );
};
export default Home;
