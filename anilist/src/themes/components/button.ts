import { MantineTheme } from '@mantine/core'

const ButtonTheme = {
  styles: (theme: MantineTheme) => ({
    root: {
      color: '#FFF',
      cursor: 'pointer',
      fontSize: theme.fontSizes.xl,
      borderRadius: '6px',
      fontWeight: 800,
      background: '#3577ff',
      padding: '10px 15px',
    },
  }),
  variants: {
    primary: () => ({
      root: {
        transition: 'box-shadow .6s ease,transform .2s ease-in-out',
        ':hover': {
          boxShadow: `0 2px 10px #3577ff`,
          transform: 'scale(1.03)',
        },
      },
    }),
  },
}

export default ButtonTheme
