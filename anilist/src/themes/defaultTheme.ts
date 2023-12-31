import { MantineThemeOverride } from '@mantine/core'

import FONTS_SIZES from './fontSizes'

import {
  Badge,
  Button,
  Input,
  InputWrapper,
  Modal,
  MultiSelect,
  Textarea,
  Text,
} from './components'

export const defaultTheme: MantineThemeOverride = {
  fontFamily: 'Overpass, sans-serif;',
  fontSizes: FONTS_SIZES,
  components: {
    Button,
    Badge,
    Input,
    Modal,
    MultiSelect,
    Textarea,
    InputWrapper,
    Text,
  },
}
