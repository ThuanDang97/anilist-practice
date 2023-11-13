import {
  Box,
  Button,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// components
import SmallCard from '@components/Card/SmallCard'
import TilesCard from '@components/Card/TilesCard'

// constants
import { END_POINTS } from '@constants/endPoints'

// types
import { ListAnime } from '@type/anime'

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
  const isMobile = useMediaQuery(`(max-width: 1024px)`)
  const isCard = typeCard === 'small'

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

      <Flex
        className={isCard ? classes.smallCard : classes.tilesCard}
        direction={{ base: 'row', lg: isCard ? 'row' : 'column' }}
        sx={{
          flexFlow: 'row wrap',
        }}
        gap={isCard || isMobile ? 0 : 25}
        justify={isCard || isMobile ? 'space-between' : ''}
      >
        {listAnimeTransformer.map((anime, index) => (
          <Box key={anime.id} className={classes.results}>
            {isCard ? (
              <SmallCard anime={anime} />
            ) : (
              <>
                {isMobile ? (
                  <SmallCard anime={anime} />
                ) : (
                  <>
                    <Text className={classes.ranks}>#{index + 1}</Text>
                    <TilesCard anime={anime} />
                  </>
                )}
              </>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default ListCardComponent
