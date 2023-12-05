import { Box, MultiSelect, Text, useMantineTheme } from '@mantine/core'

// types
import { ListGenres, ListGenresGroup } from '@type/genres'

type SelectType = {
  title: string
  listSelect: ListGenres[] | ListGenresGroup[] | string[]
  placeHolder?: string
}

const Select = ({ title, listSelect, placeHolder = 'any' }: SelectType) => {
  const theme = useMantineTheme()
  return (
    <Box>
      <Text color={theme.colors.title[2]} fw={600}>
        {title}
      </Text>
      <MultiSelect
        aria-label="My select"
        searchable
        clearable
        disableSelectedItemFiltering
        data={listSelect}
        size="md"
        placeholder={placeHolder}
        maxDropdownHeight={200}
      />
    </Box>
  )
}

export default Select
