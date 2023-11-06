import { MantineTheme } from '@mantine/core'

const ButtonTheme = {
  styles: (theme: MantineTheme) => ({
    root: {
      color: theme.colors.light[0],
      cursor: 'pointer',
      fontSize: theme.fontSizes.xl,
      borderRadius: '6px',
      fontWeight: 800,
      background: theme.colors.blue[1],
      padding: '10px 15px',
    },
  }),
  variants: {
    primary: (theme: MantineTheme) => ({
      root: {
        transition: 'box-shadow .6s ease,transform .2s ease-in-out',
        ':hover': {
          boxShadow: `0 2px 10px ${theme.colors.blue[1]}`,
          transform: 'scale(1.03)',
        },
      },
    }),
    secondary: (theme: MantineTheme) => ({
      root: {
        transition: 'box-shadow .4s ease',
        ':hover': {
          boxShadow: `0 2px 43px ${theme.colors.blue[1]}`,
        },
      },
    }),
  },
}

export default ButtonTheme
