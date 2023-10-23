// utils
import { render, screen } from '@utils/testUtils'

// components
import Footer from '..'

// mocks
import {
  mockAbout,
  mockConnect,
  mockSocial,
  mockSupport,
} from '@mocks/mockNavFooter'

describe('Footer Layout', () => {
  test('renders Footer layout with correct sections and links', () => {
    const { container } = render(<Footer />)

    expect(container).toBeInTheDocument()

    // Assert about section links
    mockAbout.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })

    // Assert connect section links
    mockConnect.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })

    // Assert social section links
    mockSocial.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })

    // Assert support section links
    mockSupport.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })
  })
})
