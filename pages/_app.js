import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import favicon from "../public/favicon.ico";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
