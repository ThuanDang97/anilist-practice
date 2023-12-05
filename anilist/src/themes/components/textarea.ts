import { MantineTheme } from '@mantine/core'

const TextAreaTheme = {
  styles: (theme: MantineTheme) => ({
    label: {
      color: theme.colors.title[1],
      marginBottom: '5px',
    },
  }),
}

export default TextAreaTheme
