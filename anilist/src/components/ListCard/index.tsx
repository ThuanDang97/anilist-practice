import { Box, Button, Text, Title } from '@mantine/core'
import { useStylesListCards } from './ListCard.module'
import { Link } from 'react-router-dom'
import { Anime } from '@interfaces/anime'
import SmallCard from '@components/Card/SmallCard'
import TilesCard from '@components/Card/TilesCard'
import { END_POINTS } from '@constants/endPoints'

interface IListCard {
  title: string
  listAnime: Anime[]
  typeCard?: 'small' | 'tiles'
  href: string
}

const ListCardComponent = ({
  title,
  listAnime,
  typeCard = 'small',
  href,
}: IListCard) => {
  const { classes } = useStylesListCards()

  return (
    <Box className={classes.landingSection}>
      <Link to={`${END_POINTS.SEARCH_PAGE}${href}`}>
        <Box className={classes.title}>
          <Title order={3}>{title}</Title>
          <Button>View All</Button>
        </Box>
      </Link>

      <Box
        className={typeCard === 'small' ? classes.smallCard : classes.tilesCard}
      >
        {listAnime.map((anime, index) => (
          <Box key={anime.id} className={classes.results}>
            {typeCard === 'small' ? (
              <SmallCard anime={anime} />
            ) : (
              <>
                <Text size="lg" className={classes.ranks}>
                  #{index + 1}
                </Text>
                <TilesCard anime={anime} />
              </>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ListCardComponent
