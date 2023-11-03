// utils
import { render } from '@utils/testUtils'

// components
import MainLayout from '..'

describe('Main Layout', () => {
  test('renders MainLayout component with Header, Outlet, and Footer', () => {
    const { container } = render(<MainLayout />)

    expect(container).toBeInTheDocument()
  })
})
