import {
  Button,
  ColorSchemeProvider,
  useMantineColorScheme,
} from '@mantine/core'

// themes
import ThemeProvider from '../theme'

// utils
import { fireEvent, render, screen } from '@utils/testUtils'

describe('Theme', () => {
  const ComponentLight = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
      <div>
        <p>{colorScheme}</p>
        <Button
          data-testid="toggle-button"
          onClick={() => toggleColorScheme('light')}
        >
          button
        </Button>
      </div>
    )
  }

  const ComponentDark = () => {
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
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <ThemeProvider>
          <div>Child Component</div>
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    // Assert that child component is rendered
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  test('toggleColorScheme function toggles the color scheme to light correctly', () => {
    render(
      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => {}}>
        <ThemeProvider>
          <ComponentLight />
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    expect(screen.getByText('light')).toBeInTheDocument()
  })

  test('toggleColorScheme function toggles the color scheme to dark correctly', () => {
    render(
      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => {}}>
        <ThemeProvider>
          <ComponentDark />
        </ThemeProvider>
      </ColorSchemeProvider>,
    )

    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    expect(screen.getByText('dark')).toBeInTheDocument()
  })
})
