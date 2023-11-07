import { Badge, Box, Image, Popover, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// interfaces
import { Anime } from '@interfaces/anime'

// styles
import { useStylesSmallCard } from './SmallCard.module'

// constants
import { END_POINTS } from '@constants/endPoints'

interface AnimeItem {
  anime: Anime
}

const SmallCard = ({ anime }: AnimeItem) => {
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
      data-testid="small-card"
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
            to={`${END_POINTS.SEARCH_PAGE}/${title}`}
            onMouseEnter={open}
            onMouseLeave={close}
          >
            <Image
              src={coverImage.extraLarge}
              alt={title.userPreferred}
              width={185}
              height={265}
              radius={5}
            />
            <Text size="md">{title.userPreferred}</Text>
          </Link>
        </Box>
      </Popover.Target>
      <Popover.Dropdown
        style={{ pointerEvents: 'none' }}
        data-testid="dropdown-card"
      >
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
            {studios.edges[0]?.node.name}
          </Text>
          <Box className={classes.info}>
            <Text>{format}</Text>
            <Text>{episodes} episodes</Text>
          </Box>
          <Box className={classes.genres}>
            {genres.slice(0, 3).map((item) => (
              <Link key={item} to={`${END_POINTS.SEARCH_PAGE}/${item}`}>
                <Badge bg={coverImage.color} tt="lowercase">
                  {item}
                </Badge>
              </Link>
            ))}
          </Box>
        </Box>
      </Popover.Dropdown>
    </Popover>
  )
}

export default SmallCard
