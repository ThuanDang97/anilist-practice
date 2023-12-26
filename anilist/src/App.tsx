import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import '../styles/global.css'
import '../styles/reset.css'

//  themes
import ThemeProvider from './theme'

// layouts
import MainLayout from './layouts/MainLayout'

// pages
import DetailPage from '@pages/DetailPage'
import HomePage from '@pages/HomePage'
import SearchPage from '@pages/SearchPage'

// constants
import { END_POINTS } from './constants'

// mocks
import { navDetail } from '@mocks/mockNavDetail'

// layouts
import DetailLayout from './layouts/DetailLayout'

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
            <Route
              path={`${END_POINTS.SEARCH_PAGE}/:type`}
              element={<SearchPage />}
            />
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
