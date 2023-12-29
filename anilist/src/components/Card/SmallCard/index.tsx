import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Flex,
  HoverCard,
  Image,
  Popover,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router-dom'

// types
import { Media } from '@type/anime'

// styles
import { useStylesSmallCard } from './SmallCard.module'

// constants
import { END_POINTS } from '@constants/endPoints'
import { Status } from '@constants/variables'

// components
import ModalEdit from '@components/ModalEdit'

// assets
import CalendarIcon from '@assets/icons/Calendar'
import PlayIcon from '@assets/icons/PlayIcon'

// utils
import { convertToKebabCase } from '@utils/convertToKebabCase'
import getContrastColor from '@utils/getContrastColor'
import { formatAiringDetails, getIconOfScore } from '@utils/utils'

// stores
import useAuth from '@stores/useAuth'

interface AnimeItem {
  anime: Media
}

const SmallCard = ({ anime }: AnimeItem) => {
  const [isOpenPopover, { close: onClosePopover, open: onOpenPopover }] =
    useDisclosure(false)
  const [isOpenedModal, { open: onOpenModal, close: onCloseModal }] =
    useDisclosure(false)
  const [userAuthentication] = useAuth((state) => [state.userAuthentication])
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
    status,
    nextAiringEpisode,
    bannerImage,
  } = anime

  const slug = convertToKebabCase(title.userPreferred)

  const renderSeason = () => {
    return status === Status.RELEASING
      ? formatAiringDetails({
          episode: nextAiringEpisode?.episode,
          timeUntilAiring: nextAiringEpisode?.timeUntilAiring,
        })
      : `${season} ${seasonYear}`
  }

  const renderListButtonEditor = () => {
    return (
      <HoverCard
        width={50}
        position="top"
        styles={{
          dropdown: {
            background: 'transparent',
            border: 'none',
            display: 'flex ',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          },
        }}
      >
        <HoverCard.Target>
          <Button
            pos="absolute"
            right="10px"
            bottom="40px"
            variant="subtle"
            sx={{
              visibility: isOpenPopover ? 'visible' : 'hidden',
              ':hover': {
                visibility: 'visible',
              },
            }}
            onClick={onOpenModal}
          >
            +
          </Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Button variant="subtle">
            <ActionIcon
              variant="transparent"
              size="13px"
              sx={{
                color: theme.colors.light[0],
              }}
            >
              <PlayIcon />
            </ActionIcon>
          </Button>

          <Button variant="subtle">
            <ActionIcon
              variant="transparent"
              size="13px"
              sx={{
                color: theme.colors.light[0],
              }}
            >
              <CalendarIcon />
            </ActionIcon>
          </Button>
        </HoverCard.Dropdown>
      </HoverCard>
    )
  }

  return (
    <>
      <Popover
        width={300}
        position="right-start"
        withArrow
        shadow="md"
        opened={isOpenPopover}
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
            role="tooltip"
            onMouseEnter={onOpenPopover}
            onMouseLeave={onClosePopover}
            pos="relative"
            sx={{
              color: theme.colors.title[0],
              ':hover': {
                color: coverImage.color || theme.colors.blue[2],
              },
            }}
          >
            {userAuthentication && renderListButtonEditor()}
            <Link
              to={`${END_POINTS.ANIME}/${id}/${slug}`}
              onMouseEnter={onOpenPopover}
              onMouseLeave={onClosePopover}
            >
              <Image
                src={coverImage.large}
                alt="Card Image"
                width={isMobile ? '115px' : '185px'}
                height={isMobile ? '165px' : '265px'}
                radius={5}
              />
              <Text
                component="p"
                size="sm"
                mt="10px"
                fw={600}
                maw={isMobile ? '115px' : '185px'}
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
            <Flex justify="space-between" className={classes.header}>
              <Text
                color={theme.colors.description[0]}
                fw={600}
                sx={{
                  textTransform: 'lowercase',
                  '::first-letter': {
                    textTransform: 'uppercase',
                  },
                }}
              >
                {renderSeason()}
              </Text>
              <Flex align="center" gap={5}>
                <Box w="19x" h="19x">
                  {getIconOfScore(averageScore)}
                </Box>
                <Text color={theme.colors.description[0]}>{averageScore}%</Text>
              </Flex>
            </Flex>

            <Text
              className={classes.studios}
              sx={{
                color: coverImage.color || theme.colors.blue[2],
              }}
            >
              {studios.edges[0]?.node.name}
            </Text>
            <Flex gap="8px" align="center" className={classes.info}>
              <Text color={theme.colors.description[0]}>{format}</Text>
              {episodes > 0 && (
                <>
                  <Text
                    size={theme.fontSizes.xxl}
                    color={theme.colors.description[0]}
                  >
                    •
                  </Text>
                  <Text color={theme.colors.description[0]}>
                    {episodes} episodes
                  </Text>
                </>
              )}
            </Flex>
            <Flex wrap="wrap" gap="10x" className={classes.genres}>
              {genres.slice(0, 3).map((item, index) => (
                <Link
                  key={`${item}-${index}`}
                  to={`${END_POINTS.SEARCH_PAGE}/${item}`}
                >
                  <Badge
                    bg={coverImage.color || theme.colors.blue[2]}
                    tt="lowercase"
                    sx={{
                      color: getContrastColor(
                        coverImage.color || theme.colors.blue[2],
                      ),
                    }}
                  >
                    {item}
                  </Badge>
                </Link>
              ))}
            </Flex>
          </Box>
        </Popover.Dropdown>
      </Popover>
      <ModalEdit
        isOpen={isOpenedModal}
        onClose={onCloseModal}
        title={title}
        coverImage={coverImage}
        bannerImage={bannerImage}
      />
    </>
  )
}

export default SmallCard
