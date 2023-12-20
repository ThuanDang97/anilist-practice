// utils
import { render } from '@utils/testUtils'

// components
import DetailLayout from '..'

describe('Detail Layout', () => {
  test('renders DetailLayout component with Header, Outlet, and Footer', () => {
    const { container } = render(<DetailLayout />)

    expect(container).toBeInTheDocument()
  })
})
