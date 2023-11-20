import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Title,
  useMantineTheme,
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
  const theme = useMantineTheme()
  const listAnimeTransformer = TransformerData(listAnime)
  const isMobile = useMediaQuery(`(max-width: 1024px)`)
  const isCard = typeCard === 'small'

  return (
    <Box className={classes.landingSection}>
      <Link to={`${END_POINTS.SEARCH_PAGE}${href}`}>
        <Flex justify="space-between" align="center" pos="relative" mb="10px">
          <Title
            order={3}
            size="16px"
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
            className={classes.button}
          >
            View All
          </Button>
        </Flex>
      </Link>

      <Grid
        sx={{
          display: 'grid',
          gridTemplateColumns:
            !isCard && !isMobile
              ? '1fr'
              : isMobile
              ? 'repeat(auto-fill,minmax(110px,1fr))'
              : 'repeat(auto-fill,185px)',
          gap: isCard ? '25px 5px' : '25px 20px',
          justifyContent: 'space-between',
        }}
        columns={2}
      >
        {listAnimeTransformer.map((anime, index) => (
          <Flex justify="center" align="center" pos="relative" key={anime.id}>
            {isCard ? (
              <SmallCard anime={anime} />
            ) : (
              <>
                {isMobile ? (
                  <Box
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <Flex
                      className={classes.ranksCircle}
                      align="center"
                      gap="1px"
                      bg={anime.coverImage.color}
                      justify="center"
                      left="-5px"
                      top="-7px"
                    >
                      <Text
                        sx={{
                          fontSize: '10px',
                        }}
                      >
                        #
                      </Text>
                      {index + 1}
                    </Flex>
                    <SmallCard anime={anime} />
                  </Box>
                ) : (
                  <>
                    <Text className={classes.ranks}>#{index + 1}</Text>
                    <TilesCard anime={anime} />
                  </>
                )}
              </>
            )}
          </Flex>
        ))}
      </Grid>
    </Box>
  )
}

export default ListCardComponent
