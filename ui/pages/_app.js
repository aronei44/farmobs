import '../styles/globals.css'
import Head from 'next/head'
import { AuthProvider } from '../context/useAuth'

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Head>
      <title>Farm Obs</title>
      <meta name="description" content="Farm Obs : agricultural management system" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </AuthProvider>
  )
}

export default MyApp
