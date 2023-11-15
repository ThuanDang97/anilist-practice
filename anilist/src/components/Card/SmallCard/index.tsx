import {
  Badge,
  Box,
  Flex,
  Image,
  Popover,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// types
import { Anime } from '@type/anime'

// styles
import { useStylesSmallCard } from './SmallCard.module'

// constants
import { END_POINTS } from '@constants/endPoints'
import { getIconOfScore } from '@utils/utils'

interface AnimeItem {
  anime: Anime
}

const SmallCard = ({ anime }: AnimeItem) => {
  const [opened, { close, open }] = useDisclosure(false)
  const { classes } = useStylesSmallCard()
  const theme = useMantineTheme()
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
          background: theme.colors.background[0],
          border: theme.colors.background[0],
        },
        arrow: {
          border: theme.colors.background[0],
        },
      }}
    >
      <Popover.Target>
        <Box
          sx={{
            color: theme.colors.title[0],
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
              color={theme.colors.description[0]}
              fw={500}
              sx={{
                textTransform: 'lowercase',
                '::first-letter': {
                  textTransform: 'uppercase',
                },
              }}
            >{`${season} ${seasonYear}`}</Text>
            <Flex align="center" gap={5}>
              <Box w={19} h={19}>
                {getIconOfScore(averageScore)}
              </Box>
              <Text color={theme.colors.description[0]}>{averageScore}%</Text>
            </Flex>
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
            <Text color={theme.colors.description[0]}>{format}</Text>
            {episodes > 0 && (
              <>
                <Box>•</Box>
                <Text color={theme.colors.description[0]}>
                  {episodes} episodes
                </Text>
              </>
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
