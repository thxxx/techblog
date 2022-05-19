import '../styles/globals.css'
import Layout from '../components/Layout'
import "../public/build/tailwind.css"

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
