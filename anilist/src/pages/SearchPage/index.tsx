import { Box, Button, Flex, Title, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { useMemo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { v4 as uuidv4 } from 'uuid'

// components
import ListCardComponent from '@components/ListCard'
import SearchComponent from '@components/Search'
import Select from '@components/Select'
import SmallCardSkeleton from '@components/Skeleton/SmallCardSkeleton'
import TilesCardSkeleton from '@components/Skeleton/TilesCardSkeleton'

// constants
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

// utils
import GenerateYearList from '@utils/generateYearList'
import { transformEnumToList } from '@utils/transformEnum'
import { TransformListGenres } from '@utils/transformListGenres'
import { useParams } from 'react-router-dom'
import { END_POINTS_SECTIONS } from '@constants/endPoints'
import { variables } from '@type/variable'

type TRenderSectionListAnime = {
  title: string
  listAnime: Media[]
  href: string
  typeCard?: 'small' | 'tiles'
  loading: boolean
}

const SearchPage = () => {
  const theme = useMantineTheme()

  const { data: listGenres } = useGenresList()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)
  const listYear: string[] = GenerateYearList()
  const { type } = useParams()

  const variablesSections = (): variables => {
    const typeParams = `/${type}`

    switch (typeParams) {
      case END_POINTS_SECTIONS.TRENDING:
        return trending
      case END_POINTS_SECTIONS.THIS_SEASON:
        return popularSeason
      case END_POINTS_SECTIONS.NEXT_SEASON:
        return upcoming
      case END_POINTS_SECTIONS.POPULAR:
        return popular
      case END_POINTS_SECTIONS.TOP_100:
        return top100
      default:
        return {}
    }
  }

  const variableQuery: variables = variablesSections()

  const {
    status,
    data: infiniteData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteAnimeList(variableQuery)

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
    title,
    listAnime,
    href,
    typeCard = 'small',
    loading,
  }: TRenderSectionListAnime) => {
    const isCard = typeCard === 'small'
    if (loading) {
      return (
        <Box>
          <Box>
            <Title
              order={3}
              size={16}
              sx={{
                color: theme.colors.title[2],
                ':hover': {
                  color: theme.colors.title[1],
                },
              }}
            >
              {title}
            </Title>
            <Button
              sx={{
                ':hover': {
                  color: theme.colors.title[1],
                },
              }}
            >
              View All
            </Button>
          </Box>
          <Flex
            direction={{ base: 'row', lg: isCard ? 'row' : 'column' }}
            sx={{
              flexFlow: 'row wrap',
            }}
            gap={isCard || isMobile ? 10 : 25}
            justify={isCard || isMobile ? 'space-between' : ''}
          >
            {mockListRenderSkeleton.map(() =>
              typeCard === 'small' ? (
                <SmallCardSkeleton key={uuidv4()} />
              ) : (
                <TilesCardSkeleton key={uuidv4()} />
              ),
            )}
          </Flex>
        </Box>
      )
    }

    return (
      <ListCardComponent
        title={title}
        listAnime={listAnime}
        href={href}
        typeCard={typeCard}
      />
    )
  }

  return (
    <Box>
      <Flex gap="15px" mb="80px">
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
            title: '',
            listAnime: listTransformed,
            href: '',
            typeCard: 'small',
            loading: isFetching,
          })}
        </InfiniteScroll>
      </Box>
    </Box>
  )
}

export default SearchPage
