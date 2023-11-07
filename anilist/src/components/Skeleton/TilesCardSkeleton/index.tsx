import { Flex, Skeleton } from '@mantine/core'
import { useStylesTilesCardSkeleton } from './TilesCardSkeleton.module'

const TilesCardSkeleton = () => {
  const { classes } = useStylesTilesCardSkeleton()

  return (
    <Flex className={classes.productCard} direction="row" align="center">
      <Skeleton width={48} height={60} />
      <Skeleton width={250} height={20} ml={80} />
      <Skeleton width={150} height={20} ml={200} />
    </Flex>
  )
}

export default TilesCardSkeleton
