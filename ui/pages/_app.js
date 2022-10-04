import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Farm Obs</title>
      <meta name="description" content="Farm Obs : agricultural management system" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>)
}

export default MyApp
