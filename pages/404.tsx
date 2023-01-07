import { Box } from "@chakra-ui/react";
import Head from "next/head";
const notFound = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Box>Page not found</Box>
    </>
  );
};

export default notFound;
