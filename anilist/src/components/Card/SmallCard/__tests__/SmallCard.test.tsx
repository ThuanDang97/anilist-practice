// utils
import { fireEvent, render, screen } from '@utils/testUtils'

// components
import SmallCard from '..'

// mocks
import { mockAnime } from '@mocks/mockAnime'

describe('Small Card component', () => {
  test('renders small card and show content when hover', () => {
    render(<SmallCard anime={mockAnime} />)

    const coverImage = screen.getByRole('tooltip', {
      name: /Cowboy Bebop: Tengoku no Tobira/i,
    })
    const title = screen.getByText(/Cowboy Bebop: Tengoku no Tobira/i)

    expect(coverImage).toBeInTheDocument()
    expect(title).toBeInTheDocument()

    fireEvent.mouseEnter(coverImage)
    const dropdownCard = screen.getByTestId('dropdown-card')
    const titleDropdown = screen.getByText(/summer 2001/i)
    const studios = screen.getByText(/bones/i)
    const info = screen.getByText(/MOVIE/i)
    const episodes = screen.getByText(/1 episodes/i)

    expect(dropdownCard).toBeInTheDocument()
    expect(titleDropdown).toBeInTheDocument()
    expect(studios).toBeInTheDocument()
    expect(info).toBeInTheDocument()
    expect(episodes).toBeInTheDocument()
  })
})
