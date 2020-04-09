
import Router from 'next/router'
import Head from 'next/head'
import 'antd/dist/antd.css';
import NProgress from 'nprogress'
import { UserContext } from '../Context/StoreContext'
import { useState, useMemo } from 'react'


Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({});
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <UserContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  )
}

export default MyApp