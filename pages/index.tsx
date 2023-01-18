import { Box, Flex, keyframes, useColorModeValue } from "@chakra-ui/react";
import Bars from "../components/Home/Bars";
import Section from "../components/Section";
import Head from "next/head";
import { useEffect, useState } from "react";

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
const anchoBase = keyframes`
    0%{
        width: 0%;
        opacity:1;
    }
    100%{
        width: 90%;
        opacity:1;
    }
`;
const anchoMD = keyframes`
    0%{
        width: 0%;
        opacity:1;
    }
    100%{
        width: 45%;
        opacity:1;
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
            h={{ base: "160px", md: "200px" }}
            w={{ base: "160px", md: "200px" }}
            position="absolute"
            bg={useColorModeValue(
                "linear-gradient(#ededed88, 40%,#096b4a)",
                "linear-gradient(rgba(15, 10, 24, 0.5),40%,#443567)"
            )}
            // #40edb5
            // #0a1713
            top="1000px"
            transform={{
                base: tapa
                    ? `rotateY(${(i - 8) * 45}deg)`
                    : `rotateY(${i * 135}deg) translateZ(80px)`,
                md: tapa
                    ? `rotateY(${(i - 8) * 45}deg)`
                    : `rotateY(${i * 135}deg) translateZ(100px)`,
            }}
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
    const [aspectRatio, setAspectRatio] = useState(1);

    useEffect(() => {
        const resize = () => {
            const aspectRatio = window.innerWidth / window.innerHeight;
            console.log(aspectRatio);
            setAspectRatio(aspectRatio);
        };
        window.addEventListener("resize", resize);
    }, []);
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
                        overflow="hidden"
                        w="0"
                        opacity="0"
                        display="flex"
                        justify="center"
                        align="center"
                        position="absolute"
                        left={
                            aspectRatio < 1.25 ? "5%" : { base: "5%", md: "" }
                        }
                        top={
                            aspectRatio < 1.25
                                ? "20%"
                                : { base: "20%", md: "40%" }
                        }
                        fontSize={
                            aspectRatio < 1.25
                                ? "1rem"
                                : { base: "1rem", md: "2rem" }
                        }
                        backdropFilter="blur(15px)"
                        padding="1rem"
                        py="2rem"
                        border={useColorModeValue(
                            "2px solid #ffffff",
                            "2px solid #ffffff0a"
                        )}
                        letterSpacing="1.5rem"
                        textIndent=" 1.5rem"
                        color={useColorModeValue("black", "white")}
                        animation={
                            aspectRatio < 1.25
                                ? `${anchoBase} 500ms ease-in-out forwards 1s`
                                : {
                                      base: `${anchoBase} 500ms ease-in-out forwards 1s`,
                                      md: `${anchoMD} 500ms ease-in-out forwards 1s`,
                                  }
                        }
                    >
                        <Flex
                            position="absolute"
                            w="1000px"
                            justify="center"
                            align="center"
                        >
                            Magen-z
                        </Flex>
                    </Flex>
                    <Flex
                        w={
                            aspectRatio < 1.25
                                ? "90%"
                                : { base: "90%", md: "35vw" }
                        }
                        h={
                            aspectRatio < 1.25
                                ? "80vw"
                                : { base: "80vw", md: "35vw" }
                        }
                        bg={useColorModeValue("#ffffff33", "#00000033")}
                        borderRadius="1rem"
                        justify="center"
                        align="center"
                        direction="column"
                        position={
                            aspectRatio < 1.25
                                ? "relative"
                                : { base: "relative", md: "absolute" }
                        }
                        right={aspectRatio < 1.25 ? "" : { base: "", md: "5%" }}
                        top={aspectRatio < 1.25 ? "" : { base: "", md: "15%" }}
                        bottom={
                            aspectRatio < 1.25 ? "5%" : { base: "5%", md: "" }
                        }
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
