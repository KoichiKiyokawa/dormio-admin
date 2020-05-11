import React from 'react'
import { AppProps } from 'next/app'

import Header from '../components/organisms/Header'

const App:React.FC<AppProps> = ({Component, pageProps})  => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
)

export default App
