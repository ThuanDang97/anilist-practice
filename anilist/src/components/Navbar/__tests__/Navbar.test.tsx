import { fireEvent, render, screen } from '@utils/testUtils'
import Navbar from '..'
import { mockNavbar } from '@mocks/mockNavbar'

describe('Navbar Component', () => {
  test('renders navbar component with correct item', () => {
    render(<Navbar listNavbar={mockNavbar} />)

    const link = screen.getByRole('link', {
      name: /menu/i,
    })

    expect(link).toBeInTheDocument()
  })

  test('', () => {
    render(<Navbar listNavbar={mockNavbar} />)

    mockNavbar.map((item) => {
      const { subMenu } = item
      const link = screen.getByRole('link', {
        name: /menu/i,
      })

      if (subMenu) {
        fireEvent.mouseEnter(link)

        subMenu.map((subMenuItem) => {
          expect(screen.getByTestId('menu')).toBeInTheDocument()
          expect(screen.getByText(subMenuItem.label)).toBeInTheDocument()
        })
      }
    })
  })
})
