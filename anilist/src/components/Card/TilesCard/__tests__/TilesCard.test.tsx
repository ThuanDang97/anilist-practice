// utils
import { render, screen } from '@utils/testUtils'

// components
import TilesCard from '..'

// mocks
import { mockAnime } from '@mocks/mockAnime'

describe('Tiles Card component', () => {
  test('renders tiles card and show correct content', () => {
    render(<TilesCard anime={mockAnime[0]} />)

    const coverImage = screen.getByRole('img', {
      name: /Sousou no Frieren/i,
    })
    const title = screen.getByText(/Sousou no Frieren/i)

    expect(coverImage).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
