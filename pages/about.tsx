import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Section from "../components/Section";
import SpinnigLogo from "../components/PagesSpinnigLogo";

const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Section odd>
                <Box
                    zIndex={2}
                    textAlign="center"
                    w="100%"
                    as="h1"
                    fontSize="5xl"
                    bg={useColorModeValue(
                        "linear-gradient(90deg,#00000000,#bcefde, #00000000)",
                        "linear-gradient(90deg,#00000000,#000000, #00000000)"
                    )}
                    color={useColorModeValue("purple.800", "teal.100")}
                >
                    About Page under construction
                </Box>
                <SpinnigLogo top="50%" left="50%" />
            </Section>
        </>
    );
};

export default About;
