import { Box, Flex } from '@mantine/core'

// components
import SearchComponent from '@components/Search'
import Select from '@components/Select'

// constants
import { Format, Season, Status } from '@constants/variables'

// types
import { Genres } from '@type/genres'

// utils
import GenerateYearList from '@utils/generateYearList'
import { transformEnumToList } from '@utils/transformEnum'
import { TransformListGenres } from '@utils/transformListGenres'

interface ListFilterProps {
  listGenres: Genres
}

const ListFilter = ({ listGenres }: ListFilterProps) => {
  const listYear: string[] = GenerateYearList()

  const listFilter = [
    {
      title: 'Genres',
      listSelect: TransformListGenres(listGenres?.genres, listGenres?.tags),
    },
    {
      title: 'Year',
      listSelect: listYear,
    },
    {
      title: 'Season',
      listSelect: transformEnumToList(Season),
    },
    {
      title: 'Format',
      listSelect: transformEnumToList(Format),
    },
    {
      title: 'Airing Status',
      listSelect: transformEnumToList(Status),
    },
  ]

  return (
    <Flex gap="15px" mb="80px">
      <SearchComponent />
      {listFilter.map((item) => (
        <Box key={item.title}>
          <Select title={item.title} listSelect={item.listSelect} />
        </Box>
      ))}
    </Flex>
  )
}

export default ListFilter
