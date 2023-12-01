import { Box, Input, Text, useMantineTheme } from '@mantine/core'

// assets
import SearchIcon from '@assets/icons/SearchIcon'

const SearchComponent = () => {
  const theme = useMantineTheme()

  return (
    <Box>
      <Text color={theme.colors.title[2]} fw={600}>
        Search
      </Text>
      <Input
        aria-label="search"
        icon={
          <Box w="13px" h="20px">
            <SearchIcon />
          </Box>
        }
        size="md"
        bg={theme.colors.background[0]}
        sx={{
          '.mantine-Input-input': {
            border: theme.colors.background[0],
            background: theme.colors.background[0],
            borderRadius: '6px',
          },
        }}
      />
    </Box>
  )
}

export default SearchComponent
