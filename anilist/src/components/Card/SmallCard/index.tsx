import { useDisclosure } from '@mantine/hooks'
import { Badge, Box, Button, Card, Image, Popover, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

// types
import { IAnime } from '@type/Anime.types'

// styles
import { useStylesSmallCard } from './SmallCard.module'

// constants
import { END_POINTS } from '@constants/endPoints'

interface IAnimeItem {
  anime: IAnime
}

const SmallCard = ({ anime }: IAnimeItem) => {
  const [opened, { close, open }] = useDisclosure(false)
  const { classes } = useStylesSmallCard()
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
  } = anime

  return (
    <Popover
      width={300}
      position="right-start"
      withArrow
      shadow="md"
      opened={opened}
      key={id}
      arrowSize={12}
      arrowOffset={50}
    >
      <Popover.Target>
        <Box
          className={classes.productCard}
          sx={{
            ':hover': {
              color: coverImage.color,
            },
          }}
        >
          <Link
            to={`${END_POINTS.SEARCH_PAGE}?search=${title}`}
            onMouseEnter={open}
            onMouseLeave={close}
          >
            <Image
              src={coverImage.extraLarge}
              alt={title.english}
              width={185}
              height={265}
            />
            <Text size="md">{title.romaji}</Text>
          </Link>
        </Box>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Box className={classes.wrapper}>
          <Box className={classes.header}>
            <Text className={classes.date}>{`${season} ${seasonYear}`}</Text>
            <Box>{averageScore}%</Box>
          </Box>
          <Text
            className={classes.studios}
            sx={{
              color: coverImage.color,
            }}
          >
            {studios.nodes[0].name}
          </Text>
          <Box className={classes.info}>
            <Text>{format}</Text>
            <Text>{episodes} episodes</Text>
          </Box>
          <Box className={classes.genres}>
            {genres.map((item) => (
              <Badge bg={coverImage.color} className={classes.badge} ml={5}>
                {item}
              </Badge>
            ))}
          </Box>
        </Box>
      </Popover.Dropdown>
    </Popover>
  )
}

export default SmallCard
