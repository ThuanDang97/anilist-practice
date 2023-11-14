import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesFooter = createStyles((theme: MantineTheme) => ({
  footer: {
    background: theme.colors.dark[0],
    color: theme.colors.light[3],
    fontWeight: 600,
    minHeight: '100px',
    padding: '50px 30px',
    textAlign: 'left',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
  },
  link: {
    listStyleType: 'none',
    color: theme.colors.light[3],
    fontWeight: 600,
    marginBottom: '5px',
    '& :hover': {
      color: theme.colors.blue[2],
    },
  },
  themeText: {
    color: theme.colors.blue[2],
    fontWeight: 700,
    paddingBottom: '14px',
    fontSize: '20px',
  },
  button: {
    border: `2px solid ${theme.colors.light[4]}`,
    padding: 0,
    width: '25px',
    height: '25px',
    paddingTop: '5px',
    paddingLeft: '2px',
    fontWeight: 500,
  },
}))
