// Components
import Home from '@pages/index'

// Utils
import { render } from '@utils/testUtils'

describe('Welcome Component', () => {
  test('Component Welcome matches DOM Snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
