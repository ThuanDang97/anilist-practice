import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { RouterContext } from 'next/dist/shared/lib/router-context'

// Themes
import theme from '@self-types/Themes.types'
import { NextRouter } from 'next/router'

const createMockRouter = (router?: Partial<NextRouter>): NextRouter => ({
  basePath: '',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  back: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  push: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
  ...router,
})

export const customRender = ({
  children,
  router = { query: {} },
}: {
  children: React.ReactNode
  router: Partial<NextRouter>
}) => {
  return render(
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={createMockRouter(router)}>
        {children}
      </RouterContext.Provider>
    </ThemeProvider>,
  )
}

export * from '@testing-library/react'
export { customRender as render }
