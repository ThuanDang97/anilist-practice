import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { ReactNode } from 'react'

// themes
import { defaultTheme } from './themes'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  console.log('colorScheme', colorScheme)

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value as ColorScheme)

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={defaultTheme} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default ThemeProvider
