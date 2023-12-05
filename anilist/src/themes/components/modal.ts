import { MantineTheme } from '@mantine/core'

const ModalTheme = {
  styles: (theme: MantineTheme) => ({
    header: {
      height: '100%',
      padding: '50px',
      paddingBottom: 0,
    },
    close: {
      color: theme.colors.light[0],
      fontSize: theme.fontSizes.xl,
      fontWeight: 800,
      ':hover': {
        background: 'transparent',
      },
    },
    body: {
      padding: 0,
    },
  }),
}

export default ModalTheme
