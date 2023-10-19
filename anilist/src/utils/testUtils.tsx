import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

const AllBrowserRouter = ({ children }: { children: React.ReactNode }) => {
  return children
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllBrowserRouter, ...options })

export * from '@testing-library/react'
export * from '@testing-library/user-event'
export { customRender as render }
