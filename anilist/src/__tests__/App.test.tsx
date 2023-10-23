// utils
import { render } from '@utils/testUtils'

import App from '../App'

describe('App', () => {
  test('should render App', () => {
    const { container } = render(<App />)

    expect(container).toBeInTheDocument()
  })
})
