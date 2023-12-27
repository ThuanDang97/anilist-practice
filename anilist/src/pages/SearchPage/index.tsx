import { Box, Flex, Grid, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

// components
import SearchComponent from '@components/Search'
import Select from '@components/Select'
import SmallCardSkeleton from '@components/Skeleton/SmallCardSkeleton'
import SmallCard from '@components/Card/SmallCard'

// constants
import { END_POINTS_SECTIONS } from '@constants/endPoints'
import {
  Format,
  Season,
  Status,
  popular,
  popularSeason,
  top100,
  trending,
  upcoming,
} from '@constants/variables'

// hooks
import useInfiniteAnimeList from '@hooks/useAnime/useInfiniteAnimeList'
import useGenresList from '@hooks/useGenres/useGenresList'

// mocks
import { mockListRenderSkeleton } from '@mocks/mockAnime'

// types
import { Media } from '@type/anime'
import { variables } from '@type/variable'

// utils
import GenerateYearList from '@utils/generateYearList'
import { transformEnumToList } from '@utils/transformEnum'
import { TransformListGenres } from '@utils/transformListGenres'

type TRenderSectionListAnime = {
  listAnime: Media[]
  loading: boolean
}

type VariablesSectionInfo = {
  title: string
  variable: variables
}

const SearchPage = () => {
  const { data: listGenres } = useGenresList()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)
  const listYear: string[] = GenerateYearList()
  const { type } = useParams()

  const typeParams = `/${type}`

  const getVariablesSectionInfo = (): VariablesSectionInfo => {
    switch (typeParams) {
      case END_POINTS_SECTIONS.TRENDING:
        return {
          title: 'Trending Anime',
          variable: trending,
        }
      case END_POINTS_SECTIONS.THIS_SEASON:
        return {
          title: 'Fall 2023 Anime',
          variable: popularSeason,
        }
      case END_POINTS_SECTIONS.NEXT_SEASON:
        return {
          title: 'Anime Next Season - Airing Winter 2024',
          variable: upcoming,
        }
      case END_POINTS_SECTIONS.POPULAR:
        return {
          title: 'All-Time Popular Anime',
          variable: popular,
        }
      case END_POINTS_SECTIONS.TOP_100:
        return {
          title: 'Top 100 Anime',
          variable: top100,
        }
      default:
        return {
          title: '',
          variable: {},
        }
    }
  }

  const variableSectionsInfo = getVariablesSectionInfo()

  const {
    data: infiniteData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteAnimeList(variableSectionsInfo.variable)

  const listTransformed: Media[] = useMemo(
    () => infiniteData?.pages.flatMap((item) => item.media) as Media[],
    [infiniteData?.pages],
  )

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

  const renderSectionListAnime = ({
    listAnime,
    loading,
  }: TRenderSectionListAnime) => {
    if (loading) {
      return (
        <Box>
          <Flex
            direction={{ base: 'row', lg: 'row' }}
            sx={{
              flexFlow: 'row wrap',
            }}
            gap={isMobile ? 10 : 25}
            justify={isMobile ? 'space-between' : ''}
          >
            {mockListRenderSkeleton.map(() => (
              <SmallCardSkeleton key={uuidv4()} />
            ))}
          </Flex>
        </Box>
      )
    }

    return (
      <Grid
        sx={{
          gridTemplateColumns: isMobile
            ? 'repeat(auto-fill,minmax(110px,1fr))'
            : 'repeat(auto-fill,200px)',
          gap: '25px 5px',
        }}
        columns={2}
      >
        {listAnime.map((anime) => (
          <Grid.Col span="auto" key={anime.id}>
            <SmallCard anime={anime} />)
          </Grid.Col>
        ))}
      </Grid>
    )
  }

  return (
    <Box>
      <Title variant="primary">{variableSectionsInfo.title}</Title>

      <Flex gap="15px" mb="80px" mt="30px">
        <SearchComponent />
        {listFilter.map((item) => (
          <Box key={item.title}>
            <Select title={item.title} listSelect={item.listSelect} />
          </Box>
        ))}
      </Flex>
      <Box
        p={{
          base: 16,
          md: 0,
        }}
      >
        <InfiniteScroll
          next={() => fetchNextPage()}
          hasMore={hasNextPage ?? false}
          loader={'...loading'}
          dataLength={listTransformed?.length ?? 0}
        >
          {renderSectionListAnime({
            listAnime: listTransformed,
            loading: isFetching,
          })}
        </InfiniteScroll>
      </Box>
    </Box>
  )
}

export default SearchPage
