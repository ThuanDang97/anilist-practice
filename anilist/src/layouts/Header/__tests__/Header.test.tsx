// utils
import { render, screen } from '@utils/testUtils'

// components
import Header from '..'

// mocks
import { mockNavbar } from '@mocks/mockNavbar'

// Mock the useAuth hook to return a mocked state and login function
jest.mock('@stores/useAuth', () => ({
  __esModule: true,
  default: () => [false, jest.fn()],
}))

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
    expect(screen.getByText('Login with AniList')).toBeInTheDocument()
  })

  test('renders Header component with logo and login button', () => {
    render(<Header />)

    expect(screen.getByAltText('logo')).toBeInTheDocument()
    expect(screen.getByText('Login with AniList')).toBeInTheDocument()
  })
})
