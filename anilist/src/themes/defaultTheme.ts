import { MantineThemeOverride } from '@mantine/core'

import COLORS from './color'
import FONTS_SIZES from './fontSizes'

import { Button, Badge } from './components'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Overpass, sans-serif;',
  colors: COLORS,
  fontSizes: FONTS_SIZES,
  components: {
    Button,
    Badge,
  },
}
