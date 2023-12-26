import { render } from '@utils/testUtils'
import SearchPage from '..'

describe('Search Page', () => {
  test('should render correct Search page', () => {
    const { container } = render(<SearchPage />)

    expect(container).toBeInTheDocument()
  })
})
