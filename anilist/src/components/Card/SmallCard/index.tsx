import {
  Badge,
  Box,
  Image,
  Popover,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// types
import { Anime } from '@type/anime'

// styles
import { useStylesSmallCard } from './SmallCard.module'

// constants
import { END_POINTS } from '@constants/endPoints'

// utils
import { getColorScheme } from '@utils/utils'

interface AnimeItem {
  anime: Anime
}

const SmallCard = ({ anime }: AnimeItem) => {
  const [opened, { close, open }] = useDisclosure(false)
  const { classes } = useStylesSmallCard()
  const { colorScheme } = useMantineColorScheme()
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
      styles={{
        dropdown: {
          background: getColorScheme(colorScheme, '#152232', '#FBFBFBFB'),
          border: getColorScheme(colorScheme, '#152232', '#FBFBFBFB'),
        },
        arrow: {
          border: getColorScheme(colorScheme, '#152232', '#FBFBFBFB'),
        },
      }}
    >
      <Popover.Target>
        <Box
          sx={{
            color: '#748899',
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
              width={isMobile ? 115 : 185}
              height={isMobile ? 165 : 265}
              radius={5}
            />
            <Text
              component="p"
              size="sm"
              mt={10}
              fw={600}
              maw={isMobile ? 115 : 185}
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
          <Box className={classes.header}>
            <Text
              tt="capitalize"
              color={getColorScheme(colorScheme, '#FBFBFBFB', '#152232')}
              fw={500}
            >{`${season} ${seasonYear}`}</Text>
            <Text color={getColorScheme(colorScheme, '#FBFBFBFB', '#152232')}>
              {averageScore}%
            </Text>
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
            <Text color={getColorScheme(colorScheme, '#FBFBFBFB', '#152232')}>
              {format}
            </Text>
            {episodes > 0 && (
              <Text color={getColorScheme(colorScheme, '#FBFBFBFB', '#152232')}>
                {episodes} episodes
              </Text>
            )}
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
