// utils
import { render, screen } from '@utils/testUtils'

// components
import TilesCard from '..'

// mocks
import { mockAnime } from '@mocks/mockAnime'

describe('Tiles Card component', () => {
  test('renders tiles card and show correct content', () => {
    render(<TilesCard anime={mockAnime} />)

    const coverImage = screen.getByRole('img', {
      name: /Cowboy Bebop: Tengoku no Tobira/i,
    })
    const title = screen.getByText(/Cowboy Bebop: Tengoku no Tobira/i)

    expect(coverImage).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
