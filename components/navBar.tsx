// This si just a template that I normally use for Navigation bar
// but you can change it as you want!
// This navBar has a toggle button and a responsive menu for the links
// The Backgrounds are #ffffff40 are #20202380 with transparency and
// a backdropFilter: "blur(10px)"
//
import NextLink from "next/link";
import {
    keyframes,
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    useColorModeValue,
    IconButton,
    Img,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";
import type { Router } from "next/dist/client/router"; //I use this import just to not use an any type
import LinkItem from "./LinkItem";
import { useEffect, useState } from "react";

type props = {
    path: string;
};
let rotation = keyframes`
0% {
	transform: rotate(0deg);
}
100% {
	transform: rotate(360deg);
}
`;
const NavBar = ({ path }: props) => {
    const [w, setW] = useState(25);
    useEffect(() => {
        console.clear();
        window.onscroll = function () {
            scrollFunction();
        };
        function scrollFunction() {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                setW(10);
            } else {
                setW(25);
            }
        }
    });
    return (
        <Flex
            justify="center"
            align="center"
            w="100%"
            py="0.8rem"
            bg="#00000035"
            color="aliceblue"
            position="fixed"
            backdropFilter="blur(5px)"
            zIndex="100"
            boxShadow="0 0 10px #00000035"
        >
            <Flex w="50%">
                <Flex w="100%" align="center">
                    <Flex
                        w={`${w}%`}
                        transition="width 0.3s ease-in-out"
                        position="relative"
                        align="center"
                        justify="center"
                    >
                        <Img
                            src={useColorModeValue(
                                "/pictures/Logos/Black.svg",
                                "/pictures/Logos/White.svg"
                            )}
                            cursor="pointer"
                            maxWidth="50px"
                            animation={`${rotation} 25s infinite linear`}
                        />
                        <Box
                            position="absolute"
                            cursor="pointer"
                            transition="transform 0.1s ease-in-out"
                            _hover={{
                                transform: "scale(1.3)",
                            }}
                        >
                            <LinkItem href="/" path={path}>
                                Home
                            </LinkItem>
                        </Box>
                    </Flex>
                    <LinkItem href="/about" path={path} w={w}>
                        About
                    </LinkItem>
                    <LinkItem href="/projects" path={path} w={w}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/contact" path={path} w={w}>
                        Contact
                    </LinkItem>
                </Flex>
                <ThemeToggleButton />
            </Flex>
        </Flex>
    );
};

/*
const NavBar = ({ path }: props) => {
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			style={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				flexWrap="wrap"
				alignItems="center"
				justifyContent="space-between"
			>
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					w={{ base: "full", md: "auto" }}
					align="center"
					flexGrow={1}
					mt={{ base: 4, nmd: 0 }}
				>
					<LinkItem href="/" path={path}>
						Home
					</LinkItem>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
				</Stack>
				<Flex flex={1} justify="end">
					<ThemeToggleButton />
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link}>Works</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
*/
export default NavBar;
