import { Box, Flex, keyframes, useColorModeValue } from "@chakra-ui/react";
import Bars from "../components/Home/Bars";
import Section from "../components/Section";
import Head from "next/head";

const incli = "-30deg";
const rotate = keyframes`
    0% {
        transform:  rotateX(${incli}) rotateY(0deg);
    }
    2%{
        transform:  rotateX(${incli}) rotateY(360deg);
    }
    100%{
        transform:  rotateX(${incli}) rotateY(720deg);
    }
`;

const topMovement = keyframes`
    0% {
        top:1000px;
    }
    100% {
        top:25%;
    }
`;

interface CarrouselCardProps {
    i: number;
    tapa?: boolean;
}
const CarrouselCard = ({
    i,
    tapa = false,
}: CarrouselCardProps): JSX.Element => {
    return (
        <Box
            h="200px"
            w="200px"
            position="absolute"
            bg={useColorModeValue(
                "linear-gradient(#ededed88, 40%,#096b4a)",
                "linear-gradient(rgba(15, 10, 24, 0.5),40%,#443567)"
            )}
            // #40edb5
            // #0a1713
            top="1000px"
            transform={
                tapa
                    ? `rotateY(${(i - 8) * 45}deg)`
                    : `rotateY(${i * 135}deg) translateZ(100px)`
            }
            animation={`${topMovement} 1s ease-in-out forwards calc(100ms * ${i})`}
        />
    );
};
const Carrousel = (): JSX.Element => {
    return (
        <Flex
            h="100%"
            w="100%"
            position="relative"
            css="transform-style: preserve-3d"
            justify="center"
            align="center"
        >
            <Flex
                position="absolute"
                width="100%"
                height="100%"
                display="flex"
                justify="center"
                align="center"
                css="transform-style: preserve-3d"
                transform={`rotateX(${incli})`}
                animation={`${rotate} 40s infinite linear`}
            >
                <CarrouselCard i={0} />
                <CarrouselCard i={1} />
                <CarrouselCard i={2} />
                <CarrouselCard i={3} />
                <CarrouselCard i={4} />
                <CarrouselCard i={5} />
                <CarrouselCard i={6} />
                <CarrouselCard i={7} />
                <CarrouselCard i={8} tapa />
                <CarrouselCard i={9} tapa />
                <CarrouselCard i={10} tapa />
                <CarrouselCard i={11} tapa />
            </Flex>
        </Flex>
    );
};
const Home = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Magen-z dev</title>
            </Head>
            <Box
                as="main"
                color="aliceblue"
                display="flex"
                justify-content="right"
                position="relative"
                flexDirection="column"
            >
                <Section odd>
                    <Bars />
                    <Flex
                        bg={useColorModeValue("#00000008", "#ffffff01")}
                        borderRadius="1rem"
                        w={{ base: "90%", md: "auto" }}
                        display="flex"
                        justify="center"
                        align="center"
                        position="absolute"
                        left={{ base: "5%", md: "" }}
                        top="38%"
                        fontSize="2rem"
                        backdropFilter="blur(15px)"
                        padding="1rem"
                        border={useColorModeValue(
                            "2px solid #ffffff",
                            "2px solid #ffffff0a"
                        )}
                        letterSpacing="1.5rem"
                        textIndent=" 1.5rem"
                        color={useColorModeValue("black", "white")}
                    >
                        Magen-z
                    </Flex>
                    <Flex
                        w={{ base: "90%", md: "35vw" }}
                        h={{ base: "80vw", md: "35vw" }}
                        bg={useColorModeValue("#ffffff33", "#00000033")}
                        borderRadius="1rem"
                        justify="center"
                        align="center"
                        direction="column"
                        position={{ base: "relative", md: "absolute" }}
                        right={{ base: "", md: "5%" }}
                        top={{ base: "", md: "15%" }}
                        backdropFilter="blur(15px)"
                        border={useColorModeValue(
                            "2px solid #ffffff8a",
                            "2px solid #ffffff0a"
                        )}
                        overflow="hidden"
                        textAlign="justify"
                        fontSize="1rem"
                        padding="1.5rem"
                        letterSpacing="0.1rem"
                    >
                        <Carrousel />
                    </Flex>
                </Section>
                <Section>test</Section>
            </Box>
        </>
    );
};
export default Home;
