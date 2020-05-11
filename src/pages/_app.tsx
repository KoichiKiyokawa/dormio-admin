import React from 'react'
import { AppProps } from 'next/app'
import {Provider}from'react-redux'

import Header from '../components/organisms/Header'
import Sidebar from '../components/organisms/Sidebar'
import '../styles/style.css'
import store from '../store'

const App:React.FC<AppProps> = ({Component, pageProps})  => (
  <Provider store={store}>
    <Header />
    <Sidebar />
    <Component {...pageProps} />
  </Provider>
)

export default App
