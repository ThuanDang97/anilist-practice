import { MantineTheme, createStyles } from '@mantine/core'

export const useStylesTilesCardSkeleton = createStyles(
  (theme: MantineTheme) => ({
    productCard: {
      height: '80px',
      width: '80%',
      background: theme.colors.background[0],
      padding: '10px',
    },
  }),
)
