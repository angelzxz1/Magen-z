import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../navBar";
import type { Router } from "next/dist/client/router";
//                  next/app/dist/pages/client/router
type Props = {
    children: JSX.Element;
    router: Router;
    title: string;
};
const Main = ({ children, router, title }: Props) => {
    return (
        <Box as="main">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/pictures/Logos/favicon.ico"
                />
            </Head>
            <NavBar path={router.asPath} />
            <Box>{children}</Box>
        </Box>
    );
};

export default Main;
