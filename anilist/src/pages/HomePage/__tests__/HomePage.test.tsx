// utils
import { render } from '@utils/testUtils'

import HomePage from '..'

describe('Home Page', () => {
  test('should render Home Page', () => {
    const { container } = render(<HomePage />)

    expect(container).toBeInTheDocument()
  })
})
