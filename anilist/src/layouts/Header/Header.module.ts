import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesHeader = createStyles((theme: MantineTheme) => ({
  container: {
    maxWidth: '1050px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    backgroundColor: '#152232',
    color: theme.colors.light[6],
    fontWeight: 600,
    height: '75px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  login: {
    padding: '18px 16px',
    '& :hover': {
      color: theme.colors.light[2],
    },
  },
}))
