import SearchIcon from '@assets/icons/SearchIcon'
import { Box, Input, Text, useMantineTheme } from '@mantine/core'

const SearchComponent = () => {
  const theme = useMantineTheme()

  return (
    <Box>
      <Text color={theme.colors.title[2]} fw={600}>
        Search
      </Text>
      <Input
        icon={
          <Box w="13px" h="20px">
            <SearchIcon />
          </Box>
        }
        size="xs"
      />
    </Box>
  )
}

export default SearchComponent
