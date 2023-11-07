import { Flex, Skeleton } from '@mantine/core'

const SmallCardSkeleton = () => {
  return (
    <Flex direction="column">
      <Skeleton height={265} width={185} />
      <Skeleton height={20} width={150} mt={5} />
    </Flex>
  )
}

export default SmallCardSkeleton
