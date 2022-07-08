import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../lib/AuthContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthContextProvider>
  )
}

export default MyApp
