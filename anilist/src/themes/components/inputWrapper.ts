import { MantineTheme } from '@mantine/core'

const InputWrapperTheme = {
  styles: (theme: MantineTheme) => ({
    label: {
      color: theme.colors.title[1],
      fontSize: theme.fontSizes.sm,
      fontWeight: 600,
    },
  }),
}

export default InputWrapperTheme
