import { Flex, Skeleton, useMantineTheme } from '@mantine/core'

const SmallCardSkeleton = () => {
  const theme = useMantineTheme()
  return (
    <Flex direction="column">
      <Skeleton
        height={265}
        width={185}
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
        height={20}
        width={150}
        mt={5}
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

export default SmallCardSkeleton
