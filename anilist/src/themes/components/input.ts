import { MantineTheme } from '@mantine/core'

const InputTheme = {
  styles: (theme: MantineTheme) => ({
    input: {
      background: theme.colors.background[0],
      border: theme.colors.background[0],
      borderRadius: '6px',
      color: theme.colors.title[1],
      width: '100%',
      height: '50px',
      marginTop: '5px',
    },
  }),
}

export default InputTheme
