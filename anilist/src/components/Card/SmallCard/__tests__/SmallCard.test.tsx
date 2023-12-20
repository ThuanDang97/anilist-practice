// utils
import { fireEvent, render, screen } from '@utils/testUtils'

// components
import SmallCard from '..'

// mocks
import { mockAnime } from '@mocks/mockAnime'

describe('Small Card component', () => {
  test('renders small card and show content when hover', () => {
    render(<SmallCard anime={mockAnime[0]} />)

    const coverImage = screen.getByRole('tooltip', {
      name: /Sousou no Frieren/i,
    })
    const title = screen.getByText(/Sousou no Frieren/i)

    expect(coverImage).toBeInTheDocument()
    expect(title).toBeInTheDocument()

    fireEvent.mouseEnter(coverImage)
    const dropdownCard = screen.getByTestId('dropdown-card')
    const titleDropdown = screen.getByText(/Ep 15 airing in 4 days/i)
    const studios = screen.getByText(/MADHOUSE/i)
    const info = screen.getByText(/TV/i)
    const episodes = screen.getByText(/28 episodes/i)

    expect(dropdownCard).toBeInTheDocument()
    expect(titleDropdown).toBeInTheDocument()
    expect(studios).toBeInTheDocument()
    expect(info).toBeInTheDocument()
    expect(episodes).toBeInTheDocument()
  })
})
