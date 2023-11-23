// utils
import { render, screen } from '@utils/testUtils'

// components
import Header from '..'

// mocks
import { mockAuthNavbar, mockNavbar } from '@mocks/mockNavbar'

describe('Header Layout', () => {
  test('renders Header component with login and sign up links when not authenticated', () => {
    render(<Header />)

    // Assert logo is rendered
    expect(screen.getByAltText('logo')).toBeInTheDocument()

    // Assert non-authenticated Navbar links are rendered
    mockNavbar.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })

    // Assert Login and Sign Up links are rendered
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })

  // test('renders Header component with login and sign up links when authenticated', () => {
  //   render(<Header />)

  //   // Assert logo is rendered
  //   expect(screen.getByAltText('logo')).toBeInTheDocument()

  //   // Assert non-authenticated Navbar links are rendered
  //   mockAuthNavbar.forEach((item) => {
  //     expect(screen.getByText(item.label)).toBeInTheDocument()
  //   })

  //   // Assert Login and Sign Up links are rendered
  //   expect(screen.getByText('Login')).toBeInTheDocument()
  //   expect(screen.getByText('Sign Up')).toBeInTheDocument()
  // })
})
