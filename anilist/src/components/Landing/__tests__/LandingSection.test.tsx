import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// mocks
import { mockFeatureCards } from '@mocks/mockFeatureCards'

// components
import LandingSection from '..'

describe('Landing Section', () => {
  test('renders landing section with feature cards and join button', () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <LandingSection />
      </Router>,
    )

    // Assert that the main headings are rendered
    expect(getByText('The next-generation anime platform')).toBeInTheDocument()
    expect(
      getByText(
        'Track, share, and discover your favorite anime and manga with AniList',
      ),
    ).toBeInTheDocument()

    // Assert that each feature card is rendered
    mockFeatureCards.forEach((featureCard) => {
      expect(getByText(featureCard.title)).toBeInTheDocument()
      expect(getByText(featureCard.description)).toBeInTheDocument()
    })

    // Assert that the "Join Now" button is rendered with the correct aria-label
    const joinButton = getByLabelText('Join AniList')
    expect(joinButton).toBeInTheDocument()
    expect(joinButton).toHaveTextContent('Join Now')
  })
})
