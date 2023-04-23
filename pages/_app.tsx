import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'
import { NextPage } from 'next'
import { Layout } from '@/components/Layout'
import { setupStore } from '@/redux/store'

export type NextPageWithAccess<P = {}, IP = P> = NextPage<P, IP> & {
  isPublic?: boolean,
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithAccess
}

const store = setupStore()

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
