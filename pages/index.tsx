import { Box } from "@chakra-ui/react";
import Bars from "../components/Home/Bars";

const Home = () => {
    return (
        <Box as="main">
            <Box as="section" h="100vh">
                <Bars />
            </Box>
            <Box as="section" h="100vh">
                <Box as="h1">Hello World</Box>
            </Box>
        </Box>
    );
};
export default Home;
