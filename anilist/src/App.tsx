import '../styles/reset.css'
import '../styles/global.css'
import ThemeProvider from './theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const queryClient = new QueryClient()

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header isAuthenticated={false} />
        <Footer />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
