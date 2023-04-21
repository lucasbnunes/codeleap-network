import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '@/redux/store'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'
import { NextPage } from 'next'
import { Layout } from '@/components/Layout'

export type NextPageWithAccess<P = {}, IP = P> = NextPage<P, IP> & {
  isPublic?: boolean,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithAccess
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Provider store={store}>
        <Layout isPublic={Component.isPublic}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </MantineProvider>
  )
}
