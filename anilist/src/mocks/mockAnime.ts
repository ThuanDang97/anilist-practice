// constants
import { ListStatus } from '@constants/variables'

// types
import { Anime, ListAnime } from '@type/anime'

export const mockAnime: Anime = {
  id: 5,
  title: {
    userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
  },
  coverImage: {
    extraLarge:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
    large:
      'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
    color: '#f13500',
  },
  startDate: '',
  endDate: '',
  bannerImage:
    'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
  season: 'SUMMER',
  seasonYear: 2001,
  description:
    'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)',
  type: 'ANIME',
  format: 'MOVIE',
  status: 'FINISHED',
  episodes: 1,
  duration: 115,
  chapters: '',
  volumes: '',
  genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
  isAdult: false,
  averageScore: 82,
  popularity: 60759,
  studios: {
    edges: [
      {
        isMain: true,
        node: {
          id: 4,
          name: 'bones',
        },
      },
      {
        isMain: true,
        node: {
          id: 14,
          name: 'Sunrise',
        },
      },
    ],
  },
  nextAiringEpisode: {
    airingAt: 0,
    timeUntilAiring: 0,
    episode: 0,
  },
  mediaListEntry: {
    id: 0,
    status: ListStatus.CURRENT,
  },
}

export const mockListAnime: ListAnime[] = [
  {
    id: 1,
    title: {
      userPreferred: 'Cowboy Bebop',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
      color: '#f1785d',
    },
    startDate: {
      year: 1998,
      month: 4,
      day: 3,
    },
    endDate: {
      year: 1999,
      month: 4,
      day: 24,
    },
    bannerImage:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
    season: 'SPRING',
    seasonYear: 1998,
    description:
      'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
    type: 'ANIME',
    format: 'TV',
    status: 'FINISHED',
    episodes: 26,
    duration: 24,
    chapters: '',
    volumes: '',
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi'],
    isAdult: false,
    averageScore: 86,
    popularity: 326652,
    studios: {
      edges: [
        {
          isMain: true,
          node: {
            id: 14,
            name: 'Sunrise',
          },
        },
      ],
    },
    nextAiringEpisode: {
      airingAt: 0,
      timeUntilAiring: 0,
      episode: 0,
    },
    mediaListEntry: {
      id: 0,
      status: ListStatus.CURRENT,
    },
  },
  {
    id: 5,
    title: {
      userPreferred: 'Cowboy Bebop: Tengoku no Tobira',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
      color: '#f13500',
    },
    startDate: {
      year: 2001,
      month: 9,
      day: 1,
    },
    endDate: {
      year: 2001,
      month: 9,
      day: 1,
    },
    bannerImage:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
    season: 'SUMMER',
    seasonYear: 2001,
    description:
      'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n<br><br>\n(Source: Anime News Network)',
    type: 'ANIME',
    format: 'MOVIE',
    status: 'FINISHED',
    episodes: 1,
    duration: 115,
    chapters: '',
    volumes: '',
    genres: ['Action', 'Drama', 'Mystery', 'Sci-Fi'],
    isAdult: false,
    averageScore: 82,
    popularity: 60759,
    studios: {
      edges: [
        {
          isMain: true,
          node: {
            id: 4,
            name: 'bones',
          },
        },
        {
          isMain: true,
          node: {
            id: 14,
            name: 'Sunrise',
          },
        },
      ],
    },
    nextAiringEpisode: {
      airingAt: 0,
      timeUntilAiring: 0,
      episode: 0,
    },
    mediaListEntry: {
      id: 0,
      status: ListStatus.CURRENT,
    },
  },
]

export const mockListRenderSkeleton = ['', '', '', '', '', '']
