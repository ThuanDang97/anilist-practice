import PlayIcon from '@assets/icons/PlayIcon'
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  HoverCard,
  Image,
  Modal,
  NumberInput,
  Popover,
  Text,
  TextInput,
  Textarea,
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
import { ListStatusEdit, Status } from '@constants/variables'

// components
import Select from '@components/Select'

// icons
import FrownIcon from '@assets/icons/FrownIcon'
import MehIcon from '@assets/icons/MehIcon'
import SmileIcon from '@assets/icons/SmileIcon'
import CalendarIcon from '@assets/icons/Calendar'

// utils
import getContrastColor from '@utils/getContrastColor'
import { formatAiringDetails, getIconOfScore } from '@utils/utils'

interface AnimeItem {
  anime: Anime
}

const SmallCard = ({ anime }: AnimeItem) => {
  const [isOpenPopover, { close: onClosePopover, open: onOpenPopover }] =
    useDisclosure(false)
  const [isOpenedModal, { open: onOpenModal, close: onCloseModal }] =
    useDisclosure(false)
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

  const renderSeason = () => {
    return status === Status.RELEASING
      ? formatAiringDetails({
          episode: nextAiringEpisode.episode,
          timeUntilAiring: nextAiringEpisode.timeUntilAiring,
        })
      : `${season} ${seasonYear}`
  }

  const renderTitleModal = () => {
    return (
      <Box w="100%">
        <Flex direction="row" w="100%" align="center">
          <Image src={coverImage.large} w="100px" height="150px" mb="-30px" />
          <Text
            p="20px"
            color={theme.colors.light[0]}
            sx={{
              textWrap: 'nowrap',
            }}
          >
            {title.userPreferred}
          </Text>
        </Flex>
      </Box>
    )
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
                color: coverImage.color,
              },
            }}
          >
            {renderListButtonEditor()}
            <Link
              to={`${END_POINTS.SEARCH_PAGE}/${title}`}
              onMouseEnter={onOpenPopover}
              onMouseLeave={onClosePopover}
            >
              <Image
                src={coverImage.extraLarge}
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
                color: coverImage.color,
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
              {genres.slice(0, 3).map((item) => (
                <Link key={item} to={`${END_POINTS.SEARCH_PAGE}/${item}`}>
                  <Badge
                    bg={coverImage.color}
                    tt="lowercase"
                    sx={{
                      color: getContrastColor(coverImage.color),
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
      <Modal
        data-testid="modal-edit"
        opened={isOpenedModal}
        onClose={onCloseModal}
        title={renderTitleModal()}
        centered
        size="1000px"
        h="100%"
        styles={{
          header: {
            backgroundImage: `linear-gradient(45deg, rgba(17,22,29,0.7) 100%, rgba(237,241,245,1) 100%), url(${bannerImage})`,
            backgroundSize: 'cover',
          },
          close: {
            position: 'absolute',
            right: 10,
            top: 10,
          },
        }}
      >
        <Flex
          p="70px"
          pt="70px"
          justify="flex-end"
          direction="column"
          bg={theme.colors.background[1]}
        >
          <form>
            <Flex>
              <Flex gap="30px" direction="column" maw="80%">
                <Grid>
                  <Grid.Col span="auto">
                    <Select
                      title="Status"
                      listSelect={Object.values(ListStatusEdit)}
                      placeHolder={ListStatusEdit.PLAN_TO_WATCH}
                    />
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <Text color={theme.colors.title[2]} fw={600}>
                      Score
                    </Text>
                    <Flex
                      w="100%"
                      justify="space-around"
                      align="center"
                      gap="50px"
                      p="11px"
                      mt="5px"
                      bg={theme.colors.background[0]}
                      sx={{
                        borderRadius: '5px',
                      }}
                    >
                      <ActionIcon
                        variant="transparent"
                        size="md"
                        aria-label="smile"
                      >
                        <SmileIcon />
                      </ActionIcon>
                      <ActionIcon
                        variant="transparent"
                        size="md"
                        aria-label="meh"
                      >
                        <MehIcon />
                      </ActionIcon>
                      <ActionIcon
                        variant="transparent"
                        size="md"
                        aria-label="frown"
                      >
                        <FrownIcon />
                      </ActionIcon>
                    </Flex>
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <NumberInput label="Episode Progress" />
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span="auto">
                    <TextInput
                      label="Start Date"
                      type="date"
                      size="lg"
                      width="100%"
                    />
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <TextInput
                      label="Finish Date"
                      type="date"
                      size="lg"
                      width="100%"
                    />
                  </Grid.Col>
                  <Grid.Col span="auto">
                    <NumberInput label="Total Rewatches" size="lg" />
                  </Grid.Col>
                </Grid>
                <Textarea label="Notes" />
              </Flex>
              <Flex
                direction="column"
                justify="space-between"
                align="flex-end"
                w="30%"
              >
                <Box>
                  <TextInput
                    label="Custom Lists"
                    placeholder="No custom anime lists"
                    styles={{
                      input: {
                        borderRadius: 0,
                        background: 'transparent',
                        borderBottom: '1px solid',
                      },
                    }}
                  />
                  <Checkbox
                    label="Private"
                    mt="30px"
                    color="indigo"
                    styles={{
                      label: {
                        color: theme.colors.title[1],
                      },
                    }}
                  />
                </Box>
                <Button
                  variant="outline"
                  sx={{
                    fontSize: theme.fontSizes.xxs,
                    fontWeight: 500,
                  }}
                  mt="200px"
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Modal>
    </>
  )
}

export default SmallCard
