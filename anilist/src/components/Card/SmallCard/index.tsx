import {
  Badge,
  Box,
  Flex,
  Image,
  Popover,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// types
import { Anime } from '@type/anime'

// styles
import { useStylesSmallCard } from './SmallCard.module'

// constants
import { END_POINTS } from '@constants/endPoints'
import { Status } from '@constants/variables'

// utils
import { formatAiringDetails, getIconOfScore } from '@utils/utils'

interface AnimeItem {
  anime: Anime
}

const SmallCard = ({ anime }: AnimeItem) => {
  const [isOpenPopover, { close: onClosePopover, open: onOpenPopover }] =
    useDisclosure(false)

  const { classes } = useStylesSmallCard()
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: 1024px)`)

  const {
    id,
    title,
    season,
    seasonYear,
    averageScore,
    studios,
    format,
    episodes,
    genres,
    coverImage,
    status,
    nextAiringEpisode,
  } = anime

  const renderSeason = () => {
    return status === Status.RELEASING
      ? formatAiringDetails({
          episode: nextAiringEpisode.episode,
          timeUntilAiring: nextAiringEpisode.timeUntilAiring,
        })
      : `${season} ${seasonYear}`
  }

  return (
    <Popover
      width={300}
      position="right-start"
      withArrow
      shadow="md"
      opened={isOpenPopover}
      key={id}
      arrowSize={12}
      arrowOffset={50}
      data-testid="small-card"
      styles={{
        dropdown: {
          background: theme.colors.background[0],
          border: theme.colors.background[0],
        },
        arrow: {
          border: theme.colors.background[0],
        },
      }}
    >
      <Popover.Target>
        <Box
          sx={{
            color: theme.colors.title[0],
            ':hover': {
              color: coverImage.color,
            },
          }}
        >
          <Link
            to={`${END_POINTS.SEARCH_PAGE}/${title}`}
            onMouseEnter={onOpenPopover}
            onMouseLeave={onClosePopover}
          >
            <Image
              src={coverImage.extraLarge}
              alt={title.userPreferred}
              width={isMobile ? '115px' : '185px'}
              height={isMobile ? '165px' : '265px'}
              radius={5}
            />
            <Text
              component="p"
              size="sm"
              mt="10px"
              fw={600}
              maw={isMobile ? '115px' : '185px'}
              className={classes.title}
            >
              {title.userPreferred}
            </Text>
          </Link>
        </Box>
      </Popover.Target>
      <Popover.Dropdown
        style={{ pointerEvents: 'none' }}
        data-testid="dropdown-card"
      >
        <Box className={classes.wrapper}>
          <Flex justify="space-between" className={classes.header}>
            <Text
              color={theme.colors.description[0]}
              fw={600}
              sx={{
                textTransform: 'lowercase',
                '::first-letter': {
                  textTransform: 'uppercase',
                },
              }}
            >
              {renderSeason()}
            </Text>
            <Flex align="center" gap={5}>
              <Box w="19x" h="19x">
                {getIconOfScore(averageScore)}
              </Box>
              <Text color={theme.colors.description[0]}>{averageScore}%</Text>
            </Flex>
          </Flex>

          <Text
            className={classes.studios}
            sx={{
              color: coverImage.color,
            }}
          >
            {studios.edges[0]?.node.name}
          </Text>
          <Flex gap="8px" align="center" className={classes.info}>
            <Text color={theme.colors.description[0]}>{format}</Text>
            {episodes > 0 && (
              <>
                <Text
                  size={theme.fontSizes.xxl}
                  color={theme.colors.description[0]}
                >
                  •
                </Text>
                <Text color={theme.colors.description[0]}>
                  {episodes} episodes
                </Text>
              </>
            )}
          </Flex>
          <Flex wrap="wrap" gap="10x" className={classes.genres}>
            {genres.slice(0, 3).map((item) => (
              <Link key={item} to={`${END_POINTS.SEARCH_PAGE}/${item}`}>
                <Badge bg={coverImage.color} tt="lowercase">
                  {item}
                </Badge>
              </Link>
            ))}
          </Flex>
        </Box>
      </Popover.Dropdown>
    </Popover>
  )
}

export default SmallCard
