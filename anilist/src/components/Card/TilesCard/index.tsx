import { Badge, Box, Image, Text, useMantineColorScheme } from '@mantine/core'
import { Link } from 'react-router-dom'

// constants
import { END_POINTS } from '@constants/endPoints'

// types
import { Anime } from '@type/anime'

// styles
import { useStylesTilesCard } from './TilesCard.module'

// utils
import { getColorScheme } from '@utils/utils'

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

  const { colorScheme } = useMantineColorScheme()

  return (
    <Box
      bg={getColorScheme(colorScheme, '#151F2E', '#FBFBFBFB')}
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
        <Box className={classes.row}>
          <Link to={`${END_POINTS.SEARCH_PAGE}/${title}`}>
            <Text
              sx={{
                ':hover': {
                  color: coverImage.color,
                },
              }}
              className={classes.title}
              color={getColorScheme(colorScheme, '#C9D7E3', '#516170')}
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
        <Box className={classes.row}>
          <Text
            size="sm"
            tt="capitalize"
            color={getColorScheme(colorScheme, '#8BA0B2', '#647380')}
          >
            {averageScore}%
          </Text>
          <Text
            size="xxs"
            color={getColorScheme(colorScheme, '#647380', '#8BA0B2')}
          >
            {popularity} users
          </Text>
        </Box>
        <Box className={classes.row}>
          <Text
            size="sm"
            tt="capitalize"
            color={getColorScheme(colorScheme, '#8BA0B2', '#647380')}
          >
            {format}
          </Text>
          <Text
            size="xxs"
            color={getColorScheme(colorScheme, '#647380', '#8BA0B2')}
          >
            <Text>{episodes} episodes</Text>
          </Text>
        </Box>
        <Box className={classes.row}>
          <Text
            size="sm"
            tt="capitalize"
            color={getColorScheme(colorScheme, '#8BA0B2', '#647380')}
          >{`${season} ${seasonYear}`}</Text>
          <Text
            size="xxs"
            color={getColorScheme(colorScheme, '#647380', '#8BA0B2')}
          >
            <Text>{status}</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default TilesCard
