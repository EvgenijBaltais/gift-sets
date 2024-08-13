import '../styles/global.css'
import MainLayout from '../components/layouts/MainLayout'

import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Provider } from 'react-redux'
import store from '../store'

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

export default function MyApp({Component, pageProps}) {

    return  <Provider store = {store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
}