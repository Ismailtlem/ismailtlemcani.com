import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import { Analytics } from '@vercel/analytics/react'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'
import dynamic from 'next/dynamic'
const { ClientReload } = dynamic(() => import('@/components/ClientReload'))

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <LayoutWrapper>
        <Component {...pageProps} />
        <Analytics />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
