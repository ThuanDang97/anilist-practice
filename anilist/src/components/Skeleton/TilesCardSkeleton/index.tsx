import { Flex, Skeleton, useMantineTheme } from '@mantine/core'

// styles
import { useStylesTilesCardSkeleton } from './TilesCardSkeleton.module'

const TilesCardSkeleton = () => {
  const { classes } = useStylesTilesCardSkeleton()
  const theme = useMantineTheme()
  return (
    <Flex className={classes.productCard} direction="row" align="center">
      <Skeleton
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
