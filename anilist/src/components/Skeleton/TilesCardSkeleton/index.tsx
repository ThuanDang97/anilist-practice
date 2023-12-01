import { Flex, Skeleton, useMantineTheme } from '@mantine/core'

// styles
import { useStylesTilesCardSkeleton } from './TilesCardSkeleton.module'

const TilesCardSkeleton = () => {
  const { classes } = useStylesTilesCardSkeleton()
  const theme = useMantineTheme()
  return (
    <Flex
      className={classes.productCard}
      direction="row"
      align="center"
      aria-hidden="true"
    >
      <Skeleton
        role="img"
        aria-label="Loading Image"
        width={48}
        height={60}
        sx={{
          ':before': {
            background: theme.colors.background[1],
          },
          ':after': {
            background: theme.colors.background[0],
          },
        }}
      />
      <Skeleton
        role="status"
        aria-live="polite"
        width={250}
        height={20}
        ml={80}
        sx={{
          ':before': {
            background: theme.colors.background[1],
          },
          ':after': {
            background: theme.colors.background[0],
          },
        }}
      />
      <Skeleton
        role="status"
        aria-live="polite"
        width={150}
        height={20}
        ml={200}
        sx={{
          ':before': {
            background: theme.colors.background[1],
          },
          ':after': {
            background: theme.colors.background[0],
          },
        }}
      />
    </Flex>
  )
}

export default TilesCardSkeleton
