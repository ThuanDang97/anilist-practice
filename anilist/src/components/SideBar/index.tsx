import {
  Box,
  Button,
  Flex,
  HoverCard,
  Image,
  StarIcon,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { Link } from 'react-router-dom'

// assets
import LinkIcon from '@assets/icons/LinkIcon'

// constants
import { END_POINTS } from '@constants/endPoints'

// types
import { Media } from '@type/anime'

// utils
import convertToFormattedString from '@utils/convertToFormattedAiring'

interface SideBarProps {
  information: Media
}

const SideBar = ({ information }: SideBarProps) => {
  const theme = useMantineTheme()

  const {
    rankings,
    tags,
    format,
    episodes,
    nextAiringEpisode,
    duration,
    status,
    season,
    seasonYear,
    averageScore,
    popularity,
    studios,
    source,
    hashtag,
    genres,
    externalLinks,
  } = information

  const informationAnime = [
    {
      title: 'Airing',
      data: convertToFormattedString(nextAiringEpisode),
    },
    {
      title: 'Format',
      data: format,
    },
    {
      title: 'Episodes',
      data: episodes,
    },
    {
      title: 'Episode Duration',
      data: `${duration} mins`,
    },
    {
      title: 'Status',
      data: status,
    },
    {
      title: 'Start Date',
      data: '',
    },
    {
      title: 'Season',
      data: `${season} ${seasonYear}`,
    },
    {
      title: 'Average Score',
      data: `${averageScore}%`,
    },
    {
      title: 'Mean Score',
      data: `${averageScore}%`,
    },
    {
      title: 'Popularity',
      data: popularity,
    },
    {
      title: 'Favorites',
      data: 0,
    },
    {
      title: 'Studios',
      data: studios.edges[0].node.name,
    },
    {
      title: 'Source',
      data: source,
    },
    {
      title: 'Hashtag',
      data: hashtag,
    },
    {
      title: 'Genres',
      data: genres,
    },
    {
      title: 'episodes',
      data: episodes,
    },
  ]

  const renderListRanking = (
    <Flex direction="column" gap="5px">
      {rankings.slice(0, 2).map((item) => {
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
      })}
    </Flex>
  )

  const itemInformation = (title: string, data: string | string[] | number) => (
    <Box p="8px 12px">
      <Text size="xs" color={theme.colors.title[1]} transform="capitalize">
        {title}
      </Text>
      {Array.isArray(data) ? (
        <Flex direction="column">
          {data.map((item, index) => (
            <Text
              key={`${item}-${index}`}
              size="xxs"
              color={theme.colors.title[1]}
              fw={300}
            >
              {item}
            </Text>
          ))}
        </Flex>
      ) : (
        <Text size="xxs" color={theme.colors.title[1]} fw={300}>
          {data}
        </Text>
      )}
    </Box>
  )

  const renderListInformation = (
    <Flex w="100%" bg={theme.colors.background[0]} direction="column">
      {informationAnime.map((item, index) => {
        const { title, data } = item

        if (!data) return

        return (
          <Box key={`${title}-${index}`}>{itemInformation(title, data)}</Box>
        )
      })}
    </Flex>
  )

  const renderListTags = (
    <Flex w="100%" direction="column" gap="10px" mt="20px">
      <Text color={theme.colors.title[1]}>Tags</Text>
      {tags.map((tag) => {
        const { id, name, rank, description } = tag

        return (
          <Flex
            key={id}
            w="100%"
            p="8px 12px"
            bg={theme.colors.background[0]}
            justify="space-between"
          >
            <HoverCard width="fit-content" shadow="md">
              <HoverCard.Target>
                <Text
                  component={Link}
                  to={`${END_POINTS.SEARCH_PAGE}?genres=${name}`}
                  size="xs"
                  color={theme.colors.title[1]}
                  sx={{
                    ':hover': {
                      color: theme.colors.blue[2],
                    },
                  }}
                >
                  {name}
                </Text>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="xxs">{description}</Text>
              </HoverCard.Dropdown>
            </HoverCard>
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
      {renderListRanking}

      {renderListInformation}
      {renderListTags}
      <Flex direction="column" gap="5px">
        <Button>Write Review</Button>
        <Button>Edit</Button>
      </Flex>
      <Box>
        <Text>External & Streaming links</Text>
        <Flex direction="column">
          {externalLinks.map((item) => {
            const { id, color, icon, site, url } = item
            return (
              <Box key={item.id} bg={theme.colors.background[0]}>
                <Box
                  w={15}
                  h={15}
                  color={theme.colors.light[0]}
                  bg={color ? color : theme.colors.blue[2]}
                >
                  {icon ? <Image src={icon} /> : <LinkIcon />}
                </Box>
                {site}
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default SideBar
