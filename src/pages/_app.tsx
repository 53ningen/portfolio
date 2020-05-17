import { AppProps } from 'next/app'
import { Router } from 'next/dist/client/router'
import styled from 'styled-components'
import 'normalize.css'
import Amplify from 'aws-amplify'

import awsconfig from '../aws-exports'
import * as gtag from '../libs/gtag'
import '../styles/style.css'

Amplify.configure(awsconfig)
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

const Layout = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
`
