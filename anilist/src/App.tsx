import '../styles/reset.css'
import '../styles/global.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'

//  themes
import ThemeProvider from './theme'

// layouts
import MainLayout from './layouts/MainLayout'

// pages
import HomePage from '@pages/HomePage'
import DetailPage from '@pages/Detail'

// constants
import { END_POINTS } from './constants'
import DetailLayout from './layouts/DetailLayout'
import { navDetail } from '@mocks/mockNavDetail'

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
          <Route
            path={`${END_POINTS.ANIME}/:id/:name`}
            element={<DetailLayout />}
          >
            {navDetail.map((item) => (
              <Route
                path={`${END_POINTS.ANIME}/:id/:name/${item.link}`}
                element={<DetailPage />}
                key={item.id}
              />
            ))}
          </Route>
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
