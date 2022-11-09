import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import '../../styles/globals.css'
import '../../styles/reset.css'

// Types
import theme from '@self-types/Themes.types'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
