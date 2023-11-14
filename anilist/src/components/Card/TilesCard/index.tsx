import { Badge, Box, Flex, Image, Text, useMantineTheme } from '@mantine/core'
import { Link } from 'react-router-dom'

// constants
import { END_POINTS } from '@constants/endPoints'

// types
import { Anime } from '@type/anime'

// styles
import { useStylesTilesCard } from './TilesCard.module'
import { getIconOfScore } from '@utils/utils'

interface AnimeItem {
  anime: Anime
}

const TilesCard = ({ anime }: AnimeItem) => {
  const { classes } = useStylesTilesCard()
  const {
    title,
    season,
    seasonYear,
    averageScore,
    genres,
    coverImage,
    popularity,
    format,
    episodes,
    status,
  } = anime

  const theme = useMantineTheme()
  return (
    <Box
      bg={theme.colors.background[0]}
      className={classes.productCard}
      data-testid="tiles-card"
    >
      <Link to={`${END_POINTS.SEARCH_PAGE}/${title}`}>
        <Image
          src={coverImage.large}
          alt={title.userPreferred}
          width={48}
          height={60}
        />
      </Link>
      <Box className={classes.content}>
        <Box fw={600}>
          <Link to={`${END_POINTS.SEARCH_PAGE}/${title}`}>
            <Text
              sx={{
                ':hover': {
                  color: coverImage.color,
                },
              }}
              color={theme.colors.title[1]}
            >
              {title.userPreferred}
            </Text>
          </Link>
          <Box className={classes.genres}>
            {genres.map((item) => (
              <Link key={item} to={`${END_POINTS.SEARCH_PAGE}/${item}`}>
                <Badge bg={coverImage.color} tt="lowercase">
                  {item}
                </Badge>
              </Link>
            ))}
          </Box>
        </Box>
        <Flex fw={600} direction="row" gap={6}>
          <Box w={19} h={19} mt={3}>
            {getIconOfScore(averageScore)}
          </Box>
          <Box>
            <Text size="sm" tt="capitalize" color={theme.colors.subtitle[0]}>
              {averageScore}%
            </Text>
            <Text size="xxs" color={theme.colors.subtitle[1]}>
              {popularity} users
            </Text>
          </Box>
        </Flex>
        <Box fw={600}>
          <Text size="sm" tt="capitalize" color={theme.colors.subtitle[0]}>
            {format}
          </Text>
          <Text size="xxs" color={theme.colors.subtitle[1]}>
            <Text>{episodes} episodes</Text>
          </Text>
        </Box>
        <Box>
          <Text
            size="sm"
            tt="capitalize"
            color={theme.colors.subtitle[0]}
          >{`${season} ${seasonYear}`}</Text>
          <Text size="xxs" color={theme.colors.subtitle[1]}>
            <Text>{status}</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default TilesCard
