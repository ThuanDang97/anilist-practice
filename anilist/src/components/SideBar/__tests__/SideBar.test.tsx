import { render } from '@utils/testUtils'
import SideBar from '..'
import { mockAnime } from '@mocks/mockAnime'

describe('SideBar components', () => {
  test('should render side bar component', () => {
    const { container } = render(<SideBar information={mockAnime[0]} />)

    expect(container).toBeInTheDocument()
  })
})
