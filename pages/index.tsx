import type { NextPage } from 'next'
import Head from 'next/head'
import ControlPage from '../components/control-page'
import Login from '../components/login'
import { useAuth } from '../lib/AuthContext'

const Home: NextPage = () => {
  const context = useAuth()

  return (
    <>
      <Head>
        <title>Esp32 Control</title>
      </Head>
      {context.user ? <ControlPage /> : <Login />}
    </>
  )
}

export default Home
