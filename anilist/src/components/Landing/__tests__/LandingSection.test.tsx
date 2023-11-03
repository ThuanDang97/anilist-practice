// mocks
import { mockFeatureCards } from '@mocks/mockFeatureCards'

// utils
import { render, screen } from '@utils/testUtils'

// components
import LandingSection from '..'

describe('Landing Section', () => {
  test('renders landing section with feature cards and join button', () => {
    render(<LandingSection />)

    // Assert that the main headings are rendered
    expect(
      screen.getByText('The next-generation anime platform'),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Track, share, and discover your favorite anime and manga with AniList',
      ),
    ).toBeInTheDocument()

    // Assert that each feature card is rendered
    mockFeatureCards.forEach((featureCard) => {
      expect(screen.getByText(featureCard.title)).toBeInTheDocument()
      expect(screen.getByText(featureCard.description)).toBeInTheDocument()
    })

    // Assert that the "Join Now" button is rendered with the correct aria-label
    const joinButton = screen.getByLabelText('Join AniList')
    expect(joinButton).toBeInTheDocument()
    expect(joinButton).toHaveTextContent('Join Now')
  })
})
