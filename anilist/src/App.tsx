import '../styles/reset.css'
import '../styles/global.css'
import ThemeProvider from './theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from '@pages/HomePage'
import { END_POINTS } from './constants'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
})

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route path={END_POINTS.HOMEPAGE} element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
