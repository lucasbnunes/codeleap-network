import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '@/redux/store'
import { MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MantineProvider>
  )
}
