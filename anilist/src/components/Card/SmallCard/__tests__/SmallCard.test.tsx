// utils
import { fireEvent, render, screen } from '@utils/testUtils'

// components
import SmallCard from '..'

// mocks
import { mockAnime } from '@mocks/mockAnime'

describe('Small Card component', () => {
  test('renders small card and show content when hover', () => {
    render(<SmallCard anime={mockAnime} />)

    const coverImage = screen.getByRole('img', {
      name: /witch hunter robin/i,
    })
    const title = screen.getByText(/witch hunter robin/i)

    expect(coverImage).toBeInTheDocument()
    expect(title).toBeInTheDocument()

    fireEvent.mouseEnter(coverImage)
    const dropdownCard = screen.getByTestId('dropdown-card')
    const titleDropdown = screen.getByText(/summer 2002/i)
    const studios = screen.getByText(/sunrise/i)
    const info = screen.getByText(/TV/i)
    const episodes = screen.getByText(/26 episodes/i)

    expect(dropdownCard).toBeInTheDocument()
    expect(titleDropdown).toBeInTheDocument()
    expect(studios).toBeInTheDocument()
    expect(info).toBeInTheDocument()
    expect(episodes).toBeInTheDocument()
  })
})
