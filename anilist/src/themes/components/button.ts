import { MantineTheme } from '@mantine/core'

const ButtonTheme = {
  styles: (theme: MantineTheme) => ({
    root: {
      color: '#FFF',
      cursor: 'pointer',
      fontSize: theme.fontSizes.xl,
      fontWeight: 800,
    },
  }),
  variants: {
    primary: (theme: MantineTheme) => ({
      root: {
        borderRadius: '6px',
        padding: '10px 15px',
        background: theme.colors.blue[1],
        transition: 'box-shadow .6s ease,transform .2s ease-in-out',
        ':hover': {
          boxShadow: `0 2px 10px ${theme.colors.blue[1]}`,
          transform: 'scale(1.03)',
        },
      },
    }),
    subtle: (theme: MantineTheme) => ({
      root: {
        zIndex: 1,
        background: theme.colors.dark[0],
        borderRadius: '50%',
        padding: 0,
        width: '28px',
        height: '28px',
        transform: 'scale(1)',
        ':hover': {
          transform: 'scale(1.1)',
          background: theme.colors.dark[0],
        },
      },
    }),
    outline: (theme: MantineTheme) => ({
      root: {
        background: theme.colors.background[3],
        ':hover': {
          background: theme.colors.red[5],
        },
      },
    }),
  },
}

export default ButtonTheme
