import { Anime } from '@interfaces/anime'
import { useStylesTilesCard } from './TilesCard.module'
import { Badge, Box, Image, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { END_POINTS } from '@constants/endPoints'

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

  return (
    <Box className={classes.productCard} data-testid="tiles-card">
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
            <Text size="md">{title.userPreferred}</Text>
          </Link>
          <Box className={classes.genres}>
            {genres.map((item) => (
              <Link key={item} to={`${END_POINTS.SEARCH_PAGE}/${item}`}>
                <Badge
                  bg={coverImage.color || '#3577ff'}
                  className={classes.badge}
                  tt="lowercase"
                >
                  {item}
                </Badge>
              </Link>
            ))}
          </Box>
        </Box>
        <Box className={classes.row}>
          <Box>{averageScore}%</Box>
          <Text size="sm" className={classes.subRow}>
            {popularity} users
          </Text>
        </Box>
        <Box className={classes.row}>
          <Text>{format}</Text>
          <Text size="sm" className={classes.subRow}>
            <Text>{episodes} episodes</Text>
          </Text>
        </Box>
        <Box className={classes.row}>
          <Text>{`${season} ${seasonYear}`}</Text>
          <Text size="sm" className={classes.subRow}>
            <Text>{status}</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default TilesCard
