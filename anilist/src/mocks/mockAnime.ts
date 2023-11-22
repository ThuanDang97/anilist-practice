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
  {
    id: 6,
    title: {
      userPreferred: 'TRIGUN',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6-Zzun7PHNNgPt.jpg',
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg',
      color: '#f1e4c9',
    },
    startDate: {
      year: 1998,
      month: 4,
      day: 1,
    },
    endDate: {
      year: 1998,
      month: 9,
      day: 30,
    },
    bannerImage:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/6-4pIR2RY8AHZ0.jpg',
    season: 'SPRING',
    seasonYear: 1998,
    description:
      "Vash the Stampede is a wanted man with a habit of turning entire towns into rubble. The price on his head is a fortune, and his path of destruction reaches across the arid wastelands of a desert planet. Unfortunately, most encounters with the spiky-haired gunslinger don't end well for the bounty hunters who catch up with him; someone almost always gets hurt - and it's never Vash.<br>\n<br>\nOddly enough, for such an infamous fugitive, there's no proof that he's ever taken a life. In fact, he's a pacifist with a doughnut obsession who's more doofus than desperado. There's a whole lot more to him than his reputation lets on - Vash the Stampede definitely ain't your typical outlaw.<br>\n<br>\n(Source: Funimation)",
    type: 'ANIME',
    format: 'TV',
    status: 'FINISHED',
    episodes: 26,
    duration: 24,
    chapters: '',
    volumes: '',
    genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi'],
    isAdult: false,
    averageScore: 79,
    popularity: 115342,
    studios: {
      edges: [
        {
          isMain: true,
          node: {
            id: 11,
            name: 'MADHOUSE',
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
    id: 7,
    title: {
      userPreferred: 'Witch Hunter ROBIN',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7-6uh1fPvbgS9t.png',
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7-6uh1fPvbgS9t.png',
      color: '#e4935d',
    },
    startDate: {
      year: 2002,
      month: 7,
      day: 2,
    },
    endDate: {
      year: 2002,
      month: 12,
      day: 24,
    },
    bannerImage:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/7-hjjlCe3yO7lO.jpg',
    season: 'SUMMER',
    seasonYear: 2002,
    description:
      'Robin Sena is a powerful craft user drafted into the STNJ - a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she’s got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!<br>\n<br>\n(Source: Funimation)',
    type: 'ANIME',
    format: 'TV',
    status: 'FINISHED',
    episodes: 26,
    duration: 25,
    chapters: '',
    volumes: '',
    genres: ['Action', 'Drama', 'Mystery', 'Supernatural'],
    isAdult: false,
    averageScore: 68,
    popularity: 15381,
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
    id: 8,
    title: {
      userPreferred: 'Bouken Ou Beet',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg',
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg',
      color: '#e46b50',
    },
    startDate: {
      year: 2004,
      month: 9,
      day: 30,
    },
    endDate: {
      year: 2005,
      month: 9,
      day: 29,
    },
    bannerImage: '',
    season: 'FALL',
    seasonYear: 2004,
    description:
      "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century. ",
    type: 'ANIME',
    format: 'TV',
    status: 'FINISHED',
    episodes: 52,
    duration: 23,
    chapters: '',
    volumes: '',
    genres: ['Adventure', 'Fantasy', 'Supernatural'],
    isAdult: false,
    averageScore: 62,
    popularity: 2151,
    studios: {
      edges: [
        {
          isMain: true,
          node: {
            id: 18,
            name: 'Toei Animation',
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
    id: 15,
    title: {
      userPreferred: 'Eyeshield 21',
    },
    coverImage: {
      extraLarge:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx15-A4F2t0TgWoi4.png',
      large:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png',
      color: '#d6bb1a',
    },
    startDate: {
      year: 2005,
      month: 4,
      day: 6,
    },
    endDate: {
      year: 2008,
      month: 3,
      day: 19,
    },
    bannerImage:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/n15-1eTutXlxYzYl.jpg',
    season: 'SPRING',
    seasonYear: 2005,
    description:
      'Welcome To the Gridiron of the Damned!   Huge hulking bodies throw themselves at each other, while a tiny lithe body runs between them for the goal!  No, it&rsquo;s not a game of football, it&rsquo;s Sena Kobayakawa trying to evade the monstrous Ha-Ha brothers down the halls of Deimon High School!  But wait!  Sena&rsquo;s incredible skills at not getting caught have been spotted by the devilish (possibly actually demonic) captain of the school&rsquo;s embryonic American style football team, and when Sena asks to be the teams manager, he gets  thrust onto the field as a running back instead!  But there are two BIG catches: first, to keep the identity of their new &ldquo;star&rdquo; player an absolute secret, Yoichi makes Sena wear an opaque visor on his helmet and gives him the alias of &ldquo;Eyeshield 21.&rdquo;  And the second catch?  Well, in order to hit his fastest &ldquo;speed of light&rdquo; running mode, Sena usually has to be absolutely terrified. Not that THAT will be a problem with the monstrous players that he&rsquo;ll soon find himself running from!  The insanity hits the streets when the feet meet the cleats in EYESHIELD 21! <br><br>\n(Source: Sentai Filmworks)',
    type: 'ANIME',
    format: 'TV',
    status: 'RELEASING',
    episodes: 145,
    duration: 23,
    chapters: '',
    volumes: '',
    genres: ['Action', 'Comedy', 'Sports'],
    isAdult: false,
    averageScore: 75,
    popularity: 25376,
    studios: {
      edges: [
        {
          isMain: true,
          node: {
            id: 36,
            name: 'Studio Gallop',
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
