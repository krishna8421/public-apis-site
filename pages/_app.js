import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (

      <ChakraProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <title>Public APIs</title>
          <meta
            name="description"
            content="Collection of publicly available APIs"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;
