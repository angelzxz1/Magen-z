import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AppProps } from "next/app";
import Main from "../components/layouts/main";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Main router={router} title={Component.name}>
				<Component {...pageProps} />
			</Main>
		</ChakraProvider>
	);
}

export default MyApp;