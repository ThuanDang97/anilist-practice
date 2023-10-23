import { ColorSchemeProvider } from '@mantine/core'
import ThemeProvider from '../theme'

// utils
import { render, screen } from '@utils/testUtils'

describe('first', () => {
  test('renders ThemeProvider component with children', () => {
    render(
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={jest.fn()}>
        <ThemeProvider>
          <div>Child Component</div>
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    // Assert that child component is rendered
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })
})
