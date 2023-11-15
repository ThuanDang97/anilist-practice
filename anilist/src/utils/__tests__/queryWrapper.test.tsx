import { Wrapper } from '@utils/queryWrapper'
import { render, screen } from '@utils/testUtils'

describe('Wrapper', () => {
  it('renders children with QueryClientProvider', () => {
    render(
      <Wrapper>
        <div data-testid="test-child">Test Child</div>
      </Wrapper>,
    )

    expect(screen.getByTestId('test-child')).toBeInTheDocument()
  })
})
