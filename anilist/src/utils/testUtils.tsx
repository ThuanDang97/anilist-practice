import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from '../theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const renderWithRouterAndQuery = (children: ReactNode) => {
  const queryClient = new QueryClient()

  return render(
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>,
  )
}

export const wrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export * from '@testing-library/react'
export { renderWithRouterAndQuery as render }
