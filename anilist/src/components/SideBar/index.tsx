import { Box, Flex, StarIcon, Text, useMantineTheme } from '@mantine/core'

import { Media } from '@type/anime'

interface SideBarProps {
  information: Media
}

const SideBar = ({ information }: SideBarProps) => {
  const theme = useMantineTheme()

  const { rankings, tags, format, episodes } = information
  const renderListRanking = () => {
    return rankings.slice(0, 2).map((item) => {
      const { id, rank, context } = item

      return (
        <Box key={id} p="8px 12px" w="100%" bg={theme.colors.background[0]}>
          <Box w="5px" h="5px">
            <StarIcon />
          </Box>
          <Text
            size="xs"
            color={theme.colors.title[1]}
          >{`#${rank} ${context}`}</Text>
        </Box>
      )
    })
  }

  const renderListInformation = <Box></Box>

  const renderListTags = (
    <Flex direction="column" gap="5px">
      {tags.map((tag) => {
        const { id, name, rank } = tag
        return (
          <Flex
            key={id}
            w="100%"
            p="8px 12px"
            bg={theme.colors.background[0]}
            justify="space-between"
          >
            <Text size="xs" color={theme.colors.title[1]}>
              {name}
            </Text>
            <Text size="xs" color={theme.colors.title[1]}>
              {rank}
            </Text>
          </Flex>
        )
      })}
    </Flex>
  )

  return (
    <Flex direction="column" gap="5px" data-testid="sidebar">
      <Flex direction="column" gap="5px">
        {renderListRanking()}
      </Flex>
      <Flex>{renderListInformation}</Flex>
      <Flex>{renderListTags}</Flex>
    </Flex>
  )
}

export default SideBar
