import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import * as MU from '@material-ui/core'

import '@/styles/style.css'
import Space from '@/components/atoms/Space'
import Header from '@/components/organisms/Header'
import Sidebar from '@/components/organisms/Sidebar'
import store from '@/store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Header />
    <Sidebar />
    <MU.Container>
      <Space size={1} />
      <Component {...pageProps} />
    </MU.Container>
  </Provider>
)

export default App
