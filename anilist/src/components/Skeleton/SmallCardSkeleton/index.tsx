import { Flex, Skeleton, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const SmallCardSkeleton = () => {
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  return (
    <Flex direction="column">
      <Skeleton
        width={isMobile ? '115px' : '185px'}
        height={isMobile ? '165px' : '265px'}
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
        width={isMobile ? '110px' : '150px'}
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
