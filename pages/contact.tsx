import {
    Box,
    useColorModeValue,
    Input,
    Flex,
    Grid,
    Button,
} from "@chakra-ui/react";
import Section from "../components/Section";

interface StyledinputProps {
    ph: string;
    gridArea: string;
}
const Styledinput = ({ ph, gridArea }: StyledinputProps): JSX.Element => {
    return (
        <Input
            gridArea={gridArea}
            placeholder={ph}
            rounded="lg"
            boxShadow="md"
            p="1rem"
            bg={useColorModeValue(
                "tealTransparent.300",
                "purpleTransparent.600"
            )}
            color={useColorModeValue("black", "white")}
            _placeholder={{
                color: useColorModeValue("#00000055", "#ffffff55"),
                fontSize: "1.2rem",
                letterSpacing: "0.3rem",
                textAlign: "center",
            }}
            fontSize="1.2rem"
            letterSpacing="0.3rem"
            textAlign="center"
            fontWeight="bold"
            _hover={{
                boxShadow: "0 0 10px white",
                bg: useColorModeValue(
                    "tealTransparent.400",
                    "purpleTransparent.700"
                ),
            }}
        />
    );
};

const Contact = (): JSX.Element => {
    return (
        <Section>
            <Flex
                h="100%"
                w="100%"
                mt={{ base: "4.1rem", md: "4.8rem" }}
                justify="center"
                align="center"
            >
                <Flex
                    w={{ base: "90%", md: "50%" }}
                    h={{ base: "90%", md: "90%" }}
                    boxShadow="lg"
                    rounded="xl"
                    direction="column"
                    justify="center"
                    align="center"
                    border="1px solid"
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    bg={useColorModeValue("#00000028", "#ffffff06")}
                >
                    <Grid
                        w="100%"
                        h="100%"
                        templateAreas={`""`}
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap="1rem"
                        p="1rem"
                        alignContent={{ base: "space-around", md: "center" }}
                        justifyContent={{ base: "flex-end", md: "center" }}
                    >
                        <Styledinput gridArea="" ph="Full name" />
                        <Styledinput gridArea="" ph="Email" />
                        <Styledinput gridArea="" ph="Phone number" />
                        <Styledinput gridArea="" ph="Name" />
                        <Button
                            letterSpacing="0.3rem"
                            colorScheme={useColorModeValue(
                                "tealTransparent",
                                "purpleTransparent"
                            )}
                            color={useColorModeValue("black", "white")}
                            border="1px solid"
                            borderColor={useColorModeValue(
                                "gray.200",
                                "gray.700"
                            )}
                            w="fit-content"
                            pl="1.5rem"
                            pr="1.2rem"
                            right="0"
                        >
                            Send
                        </Button>
                        <Flex display={{ base: "none", md: "flex" }}>
                            Contact info
                        </Flex>
                    </Grid>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Contact;
