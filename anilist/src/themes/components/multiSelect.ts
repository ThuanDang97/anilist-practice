import { MantineTheme } from '@mantine/core'

const MultiSelectTheme = {
  styles: (theme: MantineTheme) => ({
    dropdown: {
      fontSize: theme.fontSizes.sm,
      background: theme.colors.background[0],
      border: theme.colors.background[0],
      color: theme.colors.title[0],
    },
  }),
}

export default MultiSelectTheme
