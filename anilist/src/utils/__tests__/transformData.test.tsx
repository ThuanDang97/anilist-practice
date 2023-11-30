import { ListStatus } from '@constants/variables'
import { mockListAnime } from '@mocks/mockAnime'
import { ListAnime } from '@type/anime'
import { TransformerData } from '@utils/transformData'

describe('TransformerData function', () => {
  const transformedAnime = TransformerData(mockListAnime)

  const result = [
    {
      id: 1,
      title: { userPreferred: 'Cowboy Bebop' },
      coverImage: {
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
        color: '#f1785d',
      },
      startDate: '1998-04-02T17:00:00.000Z',
      endDate: '1999-04-23T17:00:00.000Z',
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-OquNCNB6srGe.jpg',
      season: 'SPRING',
      seasonYear: 1998,
      description:
        'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\n' +
        'While traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
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
      nextAiringEpisode: { airingAt: 0, timeUntilAiring: 0, episode: 0 },
      mediaListEntry: { id: 0, status: 'CURRENT' },
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
    },
    {
      id: 5,
      title: { userPreferred: 'Cowboy Bebop: Tengoku no Tobira' },
      coverImage: {
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5-NozHwXWdNLCz.jpg',
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5-NozHwXWdNLCz.jpg',
        color: '#f13500',
      },
      startDate: '2001-08-31T17:00:00.000Z',
      endDate: '2001-08-31T17:00:00.000Z',
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg',
      season: 'SUMMER',
      seasonYear: 2001,
      description:
        'As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.\n' +
        '<br><br>\n' +
        '(Source: Anime News Network)',
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
      nextAiringEpisode: { airingAt: 0, timeUntilAiring: 0, episode: 0 },
      mediaListEntry: { id: 0, status: 'CURRENT' },
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
    },
  ]

  const listAnime = [
    {
      id: 1,
      title: {
        userPreferred: '',
      },
      coverImage: {
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
        color: '',
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
      bannerImage: '',
      season: '',
      seasonYear: 0,
      description: '',
      type: '',
      format: '',
      status: '',
      episodes: 0,
      duration: 0,
      chapters: '',
      volumes: '',
      genres: [],
      isAdult: false,
      averageScore: 0,
      popularity: 0,
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
  ]

  const resultEmptyData = [
    {
      id: 1,
      title: {
        userPreferred: '',
      },
      coverImage: {
        color: '#3577ff',
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png',
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
      },
      startDate: '1998-04-02T17:00:00.000Z',
      status: '',
      duration: 0,
      endDate: '1999-04-23T17:00:00.000Z',
      episodes: 0,
      bannerImage: '',
      season: '',
      seasonYear: 0,
      description: '',
      type: '',
      format: '',
      chapters: '',
      volumes: '',
      genres: [],
      isAdult: false,
      averageScore: 0,
      popularity: 0,
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
  ]

  test('transforms anime data correctly', () => {
    expect(transformedAnime).toEqual(result)
  })

  test('transforms anime data and get default value correctly', () => {
    const data = TransformerData(listAnime as ListAnime[])

    expect(data).toEqual(resultEmptyData)
  })
})
