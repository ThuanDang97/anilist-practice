import { MantineThemeOverride } from '@mantine/core'

import FONTS_SIZES from './fontSizes'

import { Button, Badge } from './components'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Overpass, sans-serif;',
  fontSizes: FONTS_SIZES,
  components: {
    Button,
    Badge,
  },
}
