import { MantineTheme } from '@mantine/core'

const Text = {
  variants: {
    primary: (theme: MantineTheme) => ({
      root: {
        color: theme.colors.title[1],
      },
    }),
    secondary: (theme: MantineTheme) => ({
      root: {
        color: theme.colors.blue[2],
      },
    }),
  },
  sizes: {
    xxs: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.xxs,
      },
    }),
    xs: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.xs,
      },
    }),
    s: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.s,
      },
    }),
    m: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.m,
      },
    }),
    l: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.l,
      },
    }),
    xl: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.xl,
      },
    }),
    xxl: (theme: MantineTheme) => ({
      root: {
        fontSize: theme.fontSizes.xxl,
      },
    }),
  },
}

export default Text
