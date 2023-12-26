// utils
import { render } from '@utils/testUtils'
import DetailPage from '..'

describe('Detail Page', () => {
  test('should render Detail Page', () => {
    const { container } = render(<DetailPage />)

    expect(container).toBeInTheDocument()
  })
})
