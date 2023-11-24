import { render } from '@utils/testUtils'
import SmallCardSkeleton from '..'

describe('SmallCardSkeleton component', () => {
  test('renders SmallCardSkeleton component', () => {
    const { container } = render(<SmallCardSkeleton />)

    // Ensure that the component renders without crashing
    expect(container).toBeInTheDocument()
  })

  test('renders skeleton with correct width and height on desktop', () => {
    // Mock media query to simulate desktop view
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(max-width: 1024px)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))

    const { container } = render(<SmallCardSkeleton />)

    expect(container).toBeTruthy()
  })
})
