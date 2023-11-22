import { MultiSelect, Text, useMantineTheme } from '@mantine/core'

// types
import { ListGenres, ListGenresGroup } from '@type/genres'

type SelectType = {
  title: string
  listSelect: ListGenres[] | ListGenresGroup[] | string[]
}

const Select = ({ title, listSelect }: SelectType) => {
  const theme = useMantineTheme()
  return (
    <>
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
        placeholder="any"
        maxDropdownHeight={280}
        sx={{
          '.mantine-MultiSelect-dropdown': {
            fontSize: theme.fontSizes.sm,
            background: theme.colors.background[0],
            border: theme.colors.background[0],
            color: theme.colors.title[0],
          },
          '.mantine-MultiSelect-input': {
            background: theme.colors.background[0],
            border: theme.colors.background[0],
            boxShadow: `  ${theme.colors.background[0]} 0px 5px 15px;`,
            borderRadius: '6px',
          },
        }}
      />
    </>
  )
}

export default Select
