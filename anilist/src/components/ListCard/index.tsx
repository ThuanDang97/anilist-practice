import { Box, Button, Text, Title, useMantineColorScheme } from '@mantine/core'
import { Link } from 'react-router-dom'

// components
import SmallCard from '@components/Card/SmallCard'
import TilesCard from '@components/Card/TilesCard'

// constants
import { END_POINTS } from '@constants/endPoints'

// interfaces
import { ListAnime } from '@interfaces/anime'

// styles
import { useStylesListCards } from './ListCard.module'

// utils
import { TransformerData } from '@utils/transformData'
import { getColorScheme } from '@utils/utils'

interface IListCard {
  title: string
  listAnime: ListAnime[]
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

  const { colorScheme } = useMantineColorScheme()
  const listAnimeTransformer = TransformerData(listAnime)

  return (
    <Box className={classes.landingSection}>
      <Link to={`${END_POINTS.SEARCH_PAGE}${href}`}>
        <Box className={classes.title}>
          <Title
            order={3}
            size={16}
            sx={{
              color: getColorScheme(colorScheme, '#ADC0D2', '#647380'),
              ':hover': {
                color: getColorScheme(colorScheme, '#C9D7E3', '#516170'),
              },
            }}
          >
            {title}
          </Title>
          <Button
            sx={{
              ':hover': {
                color: getColorScheme(colorScheme, '#C9D7E3', '#516170'),
              },
            }}
            className={classes.button}
          >
            View All
          </Button>
        </Box>
      </Link>

      <Box
        className={typeCard === 'small' ? classes.smallCard : classes.tilesCard}
      >
        {listAnimeTransformer.map((anime, index) => (
          <Box key={anime.id} className={classes.results}>
            {typeCard === 'small' ? (
              <SmallCard anime={anime} />
            ) : (
              <>
                <Text className={classes.ranks}>#{index + 1}</Text>
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
