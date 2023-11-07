import {
  Button,
  ColorSchemeProvider,
  useMantineColorScheme,
} from '@mantine/core'
import ThemeProvider from '../theme'

// utils
import { fireEvent, render, screen } from '@utils/testUtils'

describe('first', () => {
  const Component = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
      <div>
        <p>{colorScheme}</p>
        <Button
          data-testid="toggle-button"
          onClick={() => toggleColorScheme('dark')}
        >
          button
        </Button>
      </div>
    )
  }

  test('renders ThemeProvider component with children', () => {
    render(
      <ColorSchemeProvider
        colorScheme="light"
        toggleColorScheme={jest.fn(() => 'dark')}
      >
        <ThemeProvider>
          <div>Child Component</div>
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    // Assert that child component is rendered
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  test('toggleColorScheme function toggles the color scheme to dark correctly', () => {
    render(
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <ThemeProvider>
          <Component />
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    expect(screen.getByText('dark')).toBeInTheDocument()
  })

  test('toggleColorScheme function toggles the color scheme to light correctly', () => {
    render(
      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => {}}>
        <ThemeProvider>
          <Component />
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    fireEvent.click(toggleButton)

    expect(screen.getByText('light')).toBeInTheDocument()
  })
})
