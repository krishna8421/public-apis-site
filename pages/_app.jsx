import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Public APIs</title>
        <meta name="description" content="Collection of publicly available APIs" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
