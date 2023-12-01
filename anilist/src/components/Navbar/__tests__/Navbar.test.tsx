import { mockNavbar } from '@mocks/mockNavbar'
import { act, render, screen } from '@utils/testUtils'
import Navbar from '..'

describe('Navbar Component', () => {
  test('renders navbar items', () => {
    render(<Navbar listNavbar={mockNavbar} />)

    // Check if each item in the navbar is rendered
    mockNavbar.forEach((item) => {
      const link = screen.getByRole('link', {
        name: new RegExp(item.label, 'i'),
      })

      act(() => {
        expect(link).toBeInTheDocument()
      })
    })
  })
})
